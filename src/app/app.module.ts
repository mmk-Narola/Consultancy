import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ScrollComponent } from './components/scroll/scroll.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AboutUsBoxComponent } from './components/about-us-box/about-us-box.component';
import { ServicesComponent } from './components/services/services.component';
import { ServiceBoxComponent } from './components/service-box/service-box.component';
import { ChooesUsComponent } from './components/chooes-us/chooes-us.component';
import { ChooesUsBoxComponent } from './components/chooes-us-box/chooes-us-box.component';
import { BookMeetingComponent } from './components/book-meeting/book-meeting.component';
import { ClientReviewComponent } from './components/client-review/client-review.component';
import { LatestblogComponent } from './components/latestblog/latestblog.component';
import { LatestblogBoxComponent } from './components/latestblog-box/latestblog-box.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServiceComponent } from './pages/service/service.component';
import { DashboardComponent } from './dashboard/dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ScrollComponent,
    CarouselComponent,
    AboutusComponent,
    AboutUsBoxComponent,
    ServicesComponent,
    ServiceBoxComponent,
    ChooesUsComponent,
    ChooesUsBoxComponent,
    BookMeetingComponent,
    ClientReviewComponent,
    LatestblogComponent,
    LatestblogBoxComponent,
    AboutComponent,
    ContactComponent,
    ServiceComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
