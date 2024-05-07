import { Injectable, WritableSignal, signal, effect } from '@angular/core';
import { ProjectInterface } from '../Data/Project/ProjectInterface';

  const projectData: ProjectInterface[] = [
    {
      Id: 1,
      Name: "My Rangel",
      Description: "The MyRangel project is an innovative initiative developed by the company Rangel, a leader in the logistics and transportation sector. MyRangel is a comprehensive digital platform aimed at optimizing and simplifying all processes related to the supply chain, from inventory management to final delivery.",
      Company: "Rangel",
      StartDate: new Date("11/01/2019"),
      EndDate: new Date("07/01/2022"),
      Image: "assets/img/MyRangel/MyRangel-Login.jpg",
      ProjectUrl: "https://www.rangel.com/",
      Images: [
        { Id: 1, Url: "assets/img/MyRangel/MyRangel-Login.jpg", Title: "MyRangel Login" },
        { Id: 2, Url: "assets/img/MyRangel/MyRangel-Home.jpg", Title: "MyRangel Home" },
        { Id: 3, Url: "assets/img/MyRangel/MyRangel-Dashboard.jpg", Title: "MyRangel Dashboard" }
      ],
      Stack: [
        "Angular",
        "Angular Materials",
        "RXJS",
        "BootStrap",
        ".Net Core",
        "SqlServer",
        "Tibco",
        "Entity Framework Core",
        "C#",
        "Tibco"
      ]
    },
    {
      Id: 2,
      Name: "Square Hub",
      Description: "Square Hub, developed by ITSquare, is a frontend specialized in Service Desk services, providing consultancy to enhance business management. Its integration with this specific service aims to optimize processes and facilitate collaboration, promoting business growth.",
      Company: "IT Square",
      StartDate: new Date("05/01/2022"),
      EndDate: new Date("07/01/2022"),
      Image: "assets/img/imageNotFound.jpg",
      ProjectUrl: "https://itsquare.pt/",
      Images: [
        { Id: 1, Url: "https://dummyimage.com/400x400/a8a8a8/000&text=Example1", Title: "Example1" },
        { Id: 2, Url: "https://dummyimage.com/400x400/a8a8a8/000&text=Example2", Title: "Example2" },
        { Id: 3, Url: "https://dummyimage.com/400x400/a8a8a8/000&text=Example3", Title: "Example3" }
      ],
      Stack: [
        "React",
        "DotNet Core",
        "Entity Framework Core",
        "Mysql"
      ]
    },
    {
      Id: 3,
      Name: "Weasy",
      Description: "Weasy is an intuitive and powerful website creation platform designed to simplify the process of building web pages. With a user-friendly interface and a wide range of features, Weasy enables users of all skill levels to quickly and efficiently create professional websites.",
      Company: "Teya",
      StartDate: new Date("07/01/2022"),
      EndDate: new Date("01/01/2024"),
      Image: "assets/img/Weasy/Weasy-Login.jpg",
      ProjectUrl: "https://weasy.io/",
      Images: [
        { Id: 1, Url: "assets/img/Weasy/Weasy-Login.jpg", Title: "Weasy Login" },
        { Id: 2, Url: "assets/img/Weasy/Weasy-dashboard.png", Title: "Weasy Dashboard" },
        { Id: 3, Url: "assets/img/Weasy/Weasy_Apps.png", Title: "Weasy Apps" },
      ],
      Stack: [
        "PHP",
        "jquery",
        "Javascript",
        "Kubernets",
        "Docker",
        "Tekton",
        "ArgoCD",
        "Sql",
        "Postgres",
        "Mysql"
      ]
    },
  ];

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  public getProjects(): WritableSignal<ProjectInterface[]>
  {
    return signal<ProjectInterface[]>(projectData.sort((a, b) => a.EndDate.getTime() + b.EndDate.getTime()));
  }

  public getProjectById(Id: number): ProjectInterface | null {
    return projectData.find((value) => value.Id == Id)!;
  }

}
