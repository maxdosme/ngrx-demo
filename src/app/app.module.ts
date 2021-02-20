import { BookCollectionComponent } from './../components/books/book-collection/book-collection.component';
import { BookListComponent } from './../components/books/book-list/book-list.component';
import { collectionReducer } from './../store/reducers/collection.reducer';
import { booksReducer } from './../store/reducers/books.reducer';
import { MyCounterComponent } from './../components/my-counter/my-counter.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from 'src/store/reducers/counter.reducer';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    BookListComponent,
    BookCollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot({
      count: counterReducer,
      books: booksReducer,
      collection: collectionReducer
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
