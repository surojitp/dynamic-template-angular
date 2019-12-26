import { Injectable }           from '@angular/core';

@Injectable()
export class DataService {
  getDataService() {
    return {
      template: "template-1",
      title: true,
      description: true,
      data: [
        {title: "Title 1", description: "Some demo description One."},
        {title: "Title 2", description: "Some demo description Two."},
        {title: "Title 3", description: "Some demo description THREE."}
      ]
    }
  }
}
