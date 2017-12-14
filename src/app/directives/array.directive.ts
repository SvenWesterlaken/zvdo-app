
import {Directive, Input, TemplateRef, ViewContainerRef} from "@angular/core";
import * as _ from "lodash";

@Directive({
  selector: '[ifEmptyArray]'
})
export class IfEmptyArrayDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {}

  @Input()
  set ifEmptyArray(array: [any]) {
    if (!_.isEmpty(array)) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

}
