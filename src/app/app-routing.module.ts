import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {RegistrationComponent} from "./pages/admin/registration/registration.component";
import {HomeComponent} from "./shared/home/home/home.component";
import {CreatecompetitionComponent} from "./pages/admin/createcompetition/createcompetition.component";
import {NewsComponent} from "./shared/news/news.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'createcompetition',
    component: CreatecompetitionComponent
  },
  {
    path: 'news',
    component: NewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
