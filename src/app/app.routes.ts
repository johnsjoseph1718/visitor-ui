import { Routes } from '@angular/router';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Login } from './pages/login/login';
import { DashboardPage } from './pages/dashboard/dashboard';
import { AuthGuard } from './core/guards/auth.guard';
import { ScheduledVisitorsComponent } from './pages/scheduled-visitors/scheduled-visitors';
import { CompletedVisitorsComponent } from './pages/completed-visitors/completed-visitors';
import { VisitorsComponent } from './pages/visitors/visitors';
import { CreateVisitComponent } from './pages/create-visit/create-visit';
import { UpdateVisitorComponent } from './pages/update-visitor/update-visitor';
import { CancelVisitComponent }
from './pages/cancel-visit/cancel-visit';
import { RegisterVisitorComponent } from './pages/register-visitor/register-visitor';
import { ReportsComponent } from './pages/reports/reports';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        component: Login
      }
    ]
  },
  {
    path: '',
    component: MainLayout,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardPage
      },
      {
        path: 'scheduled-visitors',
        component: ScheduledVisitorsComponent
      },
      {
        path: 'completed-visitors',
        component: CompletedVisitorsComponent
      },
      {
        path: 'visitors',
        component: VisitorsComponent
      },
      {
        path: 'create-visit/:visitorId',
        component: CreateVisitComponent
      },
      {
        path: 'update-visitor/:visitorId',
        component: UpdateVisitorComponent
      },
      {
        path: 'cancel-visit/:visitorId',
        component: CancelVisitComponent
      },
      {
        path: 'register-visitor',
        component: RegisterVisitorComponent
      },
      {
  path: 'reports',
  component: ReportsComponent
}
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];  