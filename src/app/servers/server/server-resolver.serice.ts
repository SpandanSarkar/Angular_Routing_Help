import { ServersService } from './../servers.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';

interface Server{
    id: number;
    name: string;
    status: string;
}

@Injectable()

export class ServerResolver implements Resolve<Server>
{
    constructor(private serversSevice: ServersService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Server | Observable<Server> | Promise<Server> {
        return this.serversSevice.getServer(+route.params['id']);
    }
}