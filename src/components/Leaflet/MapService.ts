import { Subject } from "rxjs";

export class MapService{
  public static currentEventHoverSubject$ = new Subject<string>()
}