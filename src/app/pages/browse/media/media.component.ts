import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'xstr-media',
    templateUrl: './media.component.html',
    styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit, OnDestroy {

    mediaType: string;
    id: string;
    private sub: any;

    constructor(private router: Router, private route: ActivatedRoute) {
        this.mediaType = 'default';
        this.id = 'default';
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.mediaType = params['mtype'];
            this.id = params['id']; // (+) converts string 'id' to a number :)

            // In a real app: dispatch action to load the details here.
            if (this.mediaType.toString().startsWith('d')) { this.router.navigateByUrl('/404') }
            if (this.id.toString().startsWith('d')) { this.router.navigateByUrl('/404') }
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}