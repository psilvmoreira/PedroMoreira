import { Injectable, signal, WritableSignal } from '@angular/core';
import { CompanyInterface } from '../Data/Comapny/CompanyInterface';
import { CompanyType } from '../../Shared/Data/Company/CompanyType.enum';
import { ContractType } from '../../Shared/Data/Company/ContractType.enum';

const companyData: CompanyInterface[] = [
    {
    Id: 0,
    Name: "ATEC - Academia de Formação",
    Description: "Technician Specialist in Information Systems Technologies and Programming",
    Image: "https://scontent.flis8-1.fna.fbcdn.net/v/t39.30808-6/416697391_754563763373470_5781986542721318964_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1VR3pCeuHyUQ7kNvgGJQdDG&_nc_ht=scontent.flis8-1.fna&oh=00_AfDeUmcYhoNF-KP7BDN4v0H6HEN7ekLJjpAWhvTWPGzXhQ&oe=6636F8E5",
    ContractType: ContractType.Permanent,
    StartDate: new Date("10/01/2018"),
    EndDate: new Date("01/01/2020"),
    CompanyType: CompanyType.Education,
    Index: 3
  },
  {
    Id: 0,
    Name: "Rangel",
    Description: "A Rangel is a leading logistics and transportation company, offering integrated solutions to businesses worldwide.",
    Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnaG40nsJ26cDvLm2GBI8TeZCBfd5fEip6JpJOEyfR-1yjvUbd4jAamgqPWzK0RrXxwnU&usqp=CAU",
    ContractType: ContractType.Permanent,
    StartDate: new Date("11/01/2019"),
    EndDate: new Date("07/01/2022"),
    CompanyType: CompanyType.Experience,
    Index: 2
  },
  {
    Id: 1,
    Name: "It Square",
    Description: "IT Square is a technology company specializing in customized and innovative digital solutions for businesses across various sectors.",
    Image: "https://media.licdn.com/dms/image/C4E0BAQHBvvKwkuABvw/company-logo_200_200/0/1630603243144/itsquare_logo?e=1716422400&v=beta&t=S_bEyCUOxvrpceck06ngZtW9F_UzPw4p0gk5X06BZ14",
    ContractType: ContractType.Freelance,
    StartDate: new Date("05/01/2022"),
    EndDate: new Date("07/01/2022"),
    CompanyType: CompanyType.Experience,
    Index: 1
  },
  {
    Id: 2,
    Name: "Teya",
    Description: "Teya (formerly Saltpay) is a fintech that offers innovative digital payment solutions and financial services.",
    Image: "https://media.licdn.com/dms/image/D4E0BAQFLR6rmgbk21g/company-logo_200_200/0/1680714851420/teya_global_logo?e=2147483647&v=beta&t=yK8tGh1Q6iD_fsLd2fgfp6ZjSLgChYfkpD4d1sUaarE",
    ContractType: ContractType.Permanent,
    StartDate: new Date("07/01/2022"),
    EndDate: new Date("01/01/2024"),
    CompanyType: CompanyType.Experience,
    Index: 0
  },
];

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }

  public getCompanies(): WritableSignal<CompanyInterface[]> {
    return signal<CompanyInterface[]>(companyData.sort((a,b) => a.Index - b.Index) ?? []);
  }

}
