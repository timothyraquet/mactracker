import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class RestService {

  constructor(private http: HttpClient) {
  }

  /**
   * REST CALLS
   */
  getTreeHashMap(): Observable<any> {
    return this.http.get<any>("http://127.0.0.1:25000/api/testEndpoint");
  }


  // createKiosk(kiosk: Kiosk): Observable<Kiosk> {
  //   return this.http.post<Kiosk>(this.kioskApiConfigService.getCreateKioskEndpoint(), kiosk);
  // }
  //
  // editKiosk(kiosk: Kiosk, oldId: string): Observable<Kiosk> {
  //   return this.http.put<Kiosk>(this.kioskApiConfigService.getEditKioskEndpoint() + oldId, kiosk);
  // }
  //
  // deleteKiosk(id: string): Observable<any> {
  //   return this.http.delete(this.kioskApiConfigService.getDeleteKioskEndpoint() + encodeURIComponent(id));
  // }

}
