import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:5152/api/Visitors';

  getScheduledVisitors(visitDate: string) {

    return this.http.get(
      `${this.apiUrl}/dashboard/${visitDate}/scheduled`
    );

  }
  getDashboard(date: string) {
  return this.http.get(
    `${this.apiUrl}/dashboard/${date}`
  );
}
checkIn(visitId: number) {

  return this.http.put(
    `${this.apiUrl}/checkin/${visitId}`,
    {}
  );

}


checkOut(visitId: number) {

  return this.http.put(
    `${this.apiUrl}/checkout/${visitId}`,
    {}
  );

}
getCompletedVisitors(visitDate: string) {

  return this.http.get(
    `${this.apiUrl}/visits/completed/${visitDate}`
  );

}
searchVisitor(phoneNumber: string) {

  return this.http.get(
    `${this.apiUrl}/search/${phoneNumber}`
  );

}
createVisit(data: any) {

  return this.http.post(
    `${this.apiUrl}/create-visit`,
    data
  );

}
updateVisitor(
  visitorId: number,
  data: any
) {

  return this.http.put(
    `${this.apiUrl}/Update${visitorId}`,
    data
  );


}

cancelVisit(
  visitId: number,
  data: any
) {

  return this.http.put(
    `${this.apiUrl}/cancel/${visitId}`,
    data,
    {
      responseType: 'text'
    }
  );

}
registerVisitor(data: any) {

  return this.http.post(
    `${this.apiUrl}/register`,
    data
  );

}
cancelVisitCard(
  visitId: number,
  data: any
) {

  return this.http.put(
    `${this.apiUrl}/cancel/${visitId}`,
    data,
    {
      responseType: 'text'
    }
  );

}
getReport() {

  return this.http.get(
    `${this.apiUrl}/report`
  );

}
}
