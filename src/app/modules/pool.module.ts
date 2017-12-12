import {NgModule} from "@angular/core";
import {PoolCreateComponent} from "../components/pool/pool-create/pool-create.component";
import {PoolDetailComponent} from "../components/pool/pool-detail/pool-detail.component";
import {PoolListComponent} from "../components/pool/pool-list/pool-list.component";
import {PoolComponent} from "../components/pool/pool.component";
import {PoolContainerComponent} from "../components/pool/pool-container/pool-container.component";
import {PoolEditComponent} from "../components/pool/pool-edit/pool-edit.component";
import {SharedModule} from "./shared.module";
import {MatButtonModule, MatIconModule} from "@angular/material";
import {ReactiveFormsModule} from "@angular/forms";
import {PoolItemComponent} from "../components/pool/pool-list/pool-item/pool-item.component";
import {PoolRoutingModule} from "../routes/pool.routing.module";

@NgModule({
  declarations: [
    PoolComponent,
    PoolListComponent,
    PoolDetailComponent,
    PoolItemComponent,
    PoolCreateComponent,
    PoolContainerComponent,
    PoolEditComponent
  ],
  imports: [
    SharedModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
  ]
})
export class PoolModule { }
