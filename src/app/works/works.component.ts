import { Component, HostBinding, OnInit } from '@angular/core';
import { Project } from 'src/types/project';
import { routeAnimationState } from '../route_transition_animations';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
  animations: [routeAnimationState],
})
export class WorksComponent implements OnInit {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;
  projects: Project[] = [
    {
      title: 'Clinic Managemnt',
      linkGithub: '',
      linkLive: 'https://cabient.vercel.app/',
      image: 'assets/clinic.png',
      features: [
        'Authentication: Login Page, Roles: Admin and Secretary',
        'Appointment Management: Calendar Page, Schedule Appointments, Organize Appointments',
        'Patient Management (Secretary Role): Add Patient, Modify Patient, Remove Patient, View Patient Stats',
        'Reports (Admin Role): Clinic Earnings Stats',
        'Services Management (Admin Role): Add Service, Remove Service, Update Service, View Service Stats',
        'Service Appointments (Admin Role): Today Appointments for Each Service',
        'Doctor Management (Admin Role): Add Doctor, Edit Doctor, Remove Doctor, View Doctor Stats',
        'Doctor Appointments (Admin Role): Today Appointments for Each Doctor',
        'Employee Management (Admin Role): Add Employee, Edit Employee, Delete Employee, Real-time Employee Management, Automatic Logout on Employee Deletion',
      ],
      index: 1,
      color: 'text-gry-950',
      bg: 'hover:bg-gray-950 hover:border-gray-950',
    },
    {
      title: 'Smile',
      linkGithub: 'https://github.com/animotime-v3/smiles-v2',
      linkLive: 'https://smiles-v2.vercel.app/',
      image: 'assets/smile.png',
      features: [
        'Homepage with clinic introduction',
        'Online appointment scheduling',
        'User profile management',
        'Secure login and registration',
        "Informative 'About Us' page",
        'Detailed service descriptions',
        'Contact page',
        'Built with Angular, Tailwind CSS, and Strapi.',
      ],
      index: 2,
      color: 'text-indigo-600',
      bg: 'hover:bg-indigo-600 hover:border-indingo-600',
    },
    {
      linkGithub: 'https://github.com/animotime-v3/yummy-s',
      linkLive: 'https://yummy-zeta.vercel.app/',
      image: 'assets/yummy.png',
      features: [
        'YUMMY: A dynamic Food Delivery app with animations.',
        ' Integrates with SanityCMS for efficient content management.',
        'Admin dashboard: Real-time order tracking, data visualization, and earnings insights.',
        'User-focused: Personalized meal saving feature. Rewards system: Point-based system for user engagement.',
      ],
      title: 'YUMMY',
      color: 'text-yellow-500',
      index: 3,
      bg: 'hover:bg-yellow-500  hover:border-yellow-500',
    },
    {
      title: 'ATLAS Travel',
      index: 4,
      linkGithub: '#',
      linkLive: 'https://travelatlasmorocco.com/en/',
      color: 'text-orange-500',
      features: [
        'Complete website development',
        'Includes contact page and advanced filtering',
        'Multilingual support',
        'Features route and destination management system',
      ],
      image: 'assets/atlas.png',
      bg: 'hover:bg-orange-500 hover:border-orange-500',
    },
    {
      title: 'Nassua',
      index: 5,
      linkGithub: '#',
      linkLive: 'https://nassau.netlify.app/',
      color: 'text-balck',
      features: [
        'Payment integration using Stripe',
        'Content management for adding products and coupon system',
        'Local storage used for cart product retention if purchase is not made',
        'Authentication via Google provider',
        'Incorporation of filtering options',
        'Powered by Next.js, Tailwind CSS, and DaisyUI technologies',
        'Stripe webhook communication for secure transactions',
        'User-friendly cart feature for easy product management',
      ],
      image: 'assets/nassau.png',
      bg: 'hover:bg-black hover:border-black',
    },
    {
      title: 'AnimoTime',
      index: 6,
      linkGithub: 'https://github.com/Mohamed-Echbiy/animo-timev3',
      linkLive: 'https://animotime.site/',
      color: 'text-lime-500',
      features: [
        'Animotime is a website that blends multiple elements, incorporating authentication via Google provider',
        'The website serves as a platform to explore anime episodes and related information, with a previous integration of a consumer API for anime content',
        'Its frontend is developed using Next.js and Tailwind CSS, while the backend is built on Node.js and MongoDB',
        'The backend manages user accounts, favorites, and features a comprehensive rating system with comments for anime episodes',
        `Please note that certain functionalities might be inactive due to the project's API being taken down`,
        'Powered by Next.js, Tailwind CSS, and DaisyUI technologies',
        'The content on the website, including blogs and episode links, is efficiently managed using SanityCMS',
      ],
      image: 'assets/animotime.png',
      text: 'text-xs',
      bg: 'hover:bg-lime-500 hover:border-lime-500',
    },
    {
      title: 'Zorin Os',
      linkGithub: 'https://github.com/Mohamed-Echbiy/ZorinOs_Website_Clone',
      linkLive: 'https://zorin-clone.netlify.app/',
      image: 'assets/zorinos.png',
      features: [
        'Zorinos is a static website that replicates the Zorin OS website.',
        'The website features a complex and intricate layout.',
        'It encompasses multiple pages for a comprehensive user experience.',
      ],
      index: 7,
      color: 'text-cyan-500',
      bg: 'hover:bg-cyan-500 hover:border-cyan-500',
    },
  ];
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
