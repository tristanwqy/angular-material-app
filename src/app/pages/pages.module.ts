import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {GithubButtonModule, LoadingModule, PaginationModule} from '../component';
import {FileSizePipe} from '../component/file-upload/file-size.pipe';
import {BaseLayoutModule} from '../layouts';

import {PagesRoutingModule} from './pages.routing';
import {PagesComponent} from './pages.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {ServicesComponent} from './services/services.component';

import {BlogComponent} from './blog/blog.component';
import {BlogArticleComponent} from './blog/article/article.component';
import {BlogService} from './blog/blog.grahql';

import {ProfileComponent} from './profile/profile.component';
import {UserComponent} from './user/user.component';
import {UserService} from './user/user.service';
import {FileManagerComponent} from './file-manager/file-manager.component';
import {FileManagerFirebase} from './file-manager/file-manager.firebase';
import {FileManagerService} from './file-manager/file-manager.service';
import {ProjectComponent} from './project/project.component';

import {GraphQLModule} from '../shared/graphql.module';
import {MatDialogModule} from '@angular/material';
import {UserEditDialogComponent} from './user/user-edit-dialog.component';

@NgModule({
  imports: [
    SharedModule,
    PaginationModule,
    PagesRoutingModule,
    BaseLayoutModule,
    GithubButtonModule,
    LoadingModule,
    GraphQLModule,
  ],
  declarations: [
    PagesComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    BlogComponent,
    BlogArticleComponent,
    ProfileComponent,
    UserComponent,
    FileManagerComponent,
    ProjectComponent,
    FileSizePipe,
    UserEditDialogComponent,
  ],
  entryComponents: [
    UserEditDialogComponent,
  ],
  providers: [
    FileManagerFirebase,
    FileManagerService,
    BlogService,
    UserService,
  ]
})
export class PagesModule {
}
