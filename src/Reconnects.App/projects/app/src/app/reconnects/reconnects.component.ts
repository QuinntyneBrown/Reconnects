// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReconnectsHubClientService } from '../core/reconnects-hub-client.service';
import { map, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-reconnects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reconnects.component.html',
  styleUrls: ['./reconnects.component.scss']
})
export class ReconnectsComponent {
  constructor(
    private readonly _reconnectsHubClientService: ReconnectsHubClientService
  ) { 

    this._reconnectsHubClientService
    .hubConnection
    ?.invoke("AddToGroupAsync","Foo");
  }

  public vm$ = of([] as string[]).pipe(
    switchMap(messages => {
      return this._reconnectsHubClientService.message$.pipe(
        map(message => {
          messages = [message, ...messages];
          return {
            messages
          };
        })
      )
    })
  )
}
