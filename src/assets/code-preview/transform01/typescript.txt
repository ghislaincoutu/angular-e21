import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'transform01'
})
export class Transform01Pipe implements PipeTransform {

  constructor(protected sanitizer20: DomSanitizer) { }

  public transform(value: any, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    switch (type) {
      case 'html': return this.sanitizer20.bypassSecurityTrustHtml(value);
      case 'style': return this.sanitizer20.bypassSecurityTrustStyle(value);
      case 'script': return this.sanitizer20.bypassSecurityTrustScript(value);
      case 'url': return this.sanitizer20.bypassSecurityTrustUrl(value);
      case 'resourceUrl': return this.sanitizer20.bypassSecurityTrustResourceUrl(value);
      default: throw new Error(`Invalid safe type specified: ${type}`);
    }
  }

}
