import { Component } from '@angular/core';

@Component({
  selector: 'app-chooes-us',
  templateUrl: './chooes-us.component.html',
  styleUrls: ['./chooes-us.component.css'],
})
export class ChooesUsComponent {
  servcies: any = [
    {
      icon: 'fa  fa-cubes fs-4  text-white',
      heading: 'Best In Industry',
      text: 'Tempor erat elitr rebum at clita. Diam alor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo',
    },
    {
      icon: 'fa  fa-percent fs-4  text-white',
      heading: '99% Success Rate',
      text: 'Tempor erat elitr rebum at clita. Diam alor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo',
    },
    {
      icon: 'fa fa-award fs-4  text-white',
      heading: 'Award Winning',
      text: 'Tempor erat elitr rebum at clita. Diam alor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo',
    },
  ];

  serviceTwo: any = [
    {
      icon: 'fa fa-smile-beam fs-4  text-white',
      heading: '100% Happy Client',
      text: 'Tempor erat elitr rebum at clita. Diam alor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo',
    },
    {
      icon: 'fa fa-chart-pie fs-4  text-white',
      heading: 'Professional Advisors',
      text: 'Tempor erat elitr rebum at clita. Diam alor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo',
    },
    {
      icon: 'fa  fa-headset fs-4  text-white',
      heading: '24/7 Customer Support',
      text: 'Tempor erat elitr rebum at clita. Diam alor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo',
    },
  ];
}
