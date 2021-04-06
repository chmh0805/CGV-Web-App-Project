package com.example.cgvapplication.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.provider.MediaStore;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

import com.example.cgvapplication.R;
import com.example.cgvapplication.model.movie.Movie;
import com.example.cgvapplication.model.movietalk.MovieTalk;
import com.example.cgvapplication.service.MovieService;
import com.example.cgvapplication.service.MovieTalkService;
import com.example.cgvapplication.service.dto.CMRespDto;
import com.example.cgvapplication.service.dto.movietalk.MovieTalkSaveReqDto;

import java.net.URI;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class MovieTalkSaveActivity extends AppCompatActivity {

    private static final String TAG = "MovieTalkSaveActivity";
    private final int GET_GALLERY_IMAGE = 200;
    private Toolbar mToolbar;
    private Button mBtnSet;
    private TextView mToolbarTitle;
    private ImageView mIvBack;
    private EditText mEtContent;
    private ImageView mIvImage;
    private Spinner mSpMovieSelector;
    private List<String> mMoviesTitle;
    private List<String> mMoviesId;
    private ArrayAdapter arrayAdapter;
    private MovieTalkSaveReqDto movieTalkSaveReqDto;
    private Uri selectedImageUri;
    private String moiveId;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_movie_talk_save);
        init();
        setSupportActionBar(mToolbar);
        listener();
    }

    private void init() {
        mToolbar = findViewById(R.id.toolbar_review);
        mToolbarTitle = findViewById(R.id.tv_toolbar_title_review);
        mIvImage = findViewById(R.id.iv_image);
        mEtContent = findViewById(R.id.et_content);
        mSpMovieSelector = findViewById(R.id.sp_movie_selector);
        mMoviesTitle = new ArrayList<>();
        mMoviesId = new ArrayList<>();
        mToolbarTitle.setText("무비톡");
        mIvBack = findViewById(R.id.iv_back);
        mBtnSet = findViewById(R.id.btn_set);
        movieTalkSaveReqDto = new MovieTalkSaveReqDto();
        movieFindAll();

    }

    private void listener() {
        mIvBack.setOnClickListener(view -> {
            finish();
        });
        mIvImage.setOnClickListener(view -> {
            Intent intent = new Intent(Intent.ACTION_PICK);
            intent.setDataAndType(android.provider.MediaStore.Images.Media.EXTERNAL_CONTENT_URI, "image/*");
            startActivityForResult(intent, GET_GALLERY_IMAGE);
        });

        mSpMovieSelector.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> adapterView, View view, int i, long l) {
                moiveId = mMoviesId.get(i);
            }

            @Override
            public void onNothingSelected(AdapterView<?> adapterView) {

            }
        });
        mBtnSet.setOnClickListener(view -> {
            if(!mEtContent.getText().toString().equals("") || !mEtContent.getText().toString().equals(null)) {
                movieTalkSaveReqDto.setContent(mEtContent.getText().toString());
            } else {
                Toast.makeText(this, "내용을 작성해 주세요", Toast.LENGTH_SHORT).show();
            }

//            if(selectedImageUri != null)  {
//                movieTalkSaveReqDto.setImageSrc(selectedImageUri.toString());
//            } else {
//                Toast.makeText(this, "이미지를 선택 해주세요", Toast.LENGTH_SHORT).show();
//            }
            movieTalkSaveReqDto.setMovieId(moiveId);
            if(movieTalkSaveReqDto.getContent()!=null && movieTalkSaveReqDto.getMovieId() != null)
                save(movieTalkSaveReqDto);

        });
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {

        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == GET_GALLERY_IMAGE && resultCode == RESULT_OK && data != null && data.getData() != null) {

            selectedImageUri = data.getData();
            mIvImage.setImageURI(selectedImageUri);
            Log.d(TAG, "onActivityResult: "+selectedImageUri);

        }

    }

    private void movieFindAll() {
        MovieService movieService = MovieService.retrofit.create(MovieService.class);
        Call<CMRespDto<List<Movie>>> movieAllCall = movieService.findAll();
        movieAllCall.enqueue(new Callback<CMRespDto<List<Movie>>>() {
            @Override
            public void onResponse(Call<CMRespDto<List<Movie>>> call, Response<CMRespDto<List<Movie>>> response) {
                List<Movie> movies = response.body().getData();
                for(Movie movie: movies) {
                    mMoviesTitle.add(movie.getTitle());
                    mMoviesId.add(movie.getDocId());
                }
                arrayAdapter = new ArrayAdapter(MovieTalkSaveActivity.this, android.R.layout.simple_spinner_dropdown_item, mMoviesTitle);
                mSpMovieSelector.setAdapter(arrayAdapter);
            }

            @Override
            public void onFailure(Call<CMRespDto<List<Movie>>> call, Throwable t) {

            }
        });
    }

    private void save(MovieTalkSaveReqDto movieTalkSaveReqDto) {
        MovieTalkService movieTalkService = MovieTalkService.retrofit.create(MovieTalkService.class);
        Call<CMRespDto<MovieTalk>> movieTalkSaveCall = movieTalkService.save(movieTalkSaveReqDto);
        movieTalkSaveCall.enqueue(new Callback<CMRespDto<MovieTalk>>() {
            @Override
            public void onResponse(Call<CMRespDto<MovieTalk>> call, Response<CMRespDto<MovieTalk>> response) {
                Log.d(TAG, "onResponse: "+response.body());
                if(response.isSuccessful()) {
                    Intent intent = new Intent(MovieTalkSaveActivity.this, MainActivity.class);
                    intent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TASK| Intent.FLAG_ACTIVITY_NEW_TASK);
                    startActivity(intent);
                }
            }

            @Override
            public void onFailure(Call<CMRespDto<MovieTalk>> call, Throwable t) {

            }
        });
    }
}