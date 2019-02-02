import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class DataService {
  private userUrl = "https://randomuser.me/api/?results=10";
  userCachedData: [];
  constructor(private http: HttpClient) {}

  getOnlineData(): Observable<any> {
    return this.http.get(this.userUrl);
  }

  getCachedData() {
    this.userCachedData = JSON.parse(localStorage.getItem("userdata"));
    if (this.userCachedData == null) {
      return null;
    } else {
      return this.userCachedData;
    }
  }

  getUserDetail() {
    console.log(this.userCachedData);
  }
}
