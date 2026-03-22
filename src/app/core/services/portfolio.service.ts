import { Injectable, computed, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, finalize, of, take } from 'rxjs';
import { Portfolio } from '../models/portfolio.model';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private readonly _portfolio = signal<Portfolio | null>(null);
  private readonly _loading = signal<boolean>(false);

  readonly portfolio = computed(() => this._portfolio());
  readonly loading = computed(() => this._loading());

  constructor(private http: HttpClient) {}

  load(): void {
    if (this._portfolio()) return; // cache
    this._loading.set(true);

    this.http
      .get<Portfolio>('assets/data/portfolio.json')
      .pipe(
        take(1),
        catchError((err) => {
          console.error('Failed to load portfolio data', err);
          return of(null);
        }),
        finalize(() => this._loading.set(false))
      )
      .subscribe((data) => {
        if (data) this._portfolio.set(data);
      });
  }
}
