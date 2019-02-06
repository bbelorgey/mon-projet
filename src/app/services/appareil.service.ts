export class AppareilService {
  
  appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      id: 2,
      name: 'Télévision',
      status: 'allumé'
    },
    {
      id: 3,
      name: 'Frigo',
      status: 'éteint'
    }
  ]

  getAppareilById (id:number) {
    const appareil = this.appareils.find(
      appareilElt => appareilElt.id === id
    )
    return appareil;
  }

  switchOnAll() {
    for(let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
  }

  switchOffAll() {
    for(let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
  }

  switchOnOne(index: number) {
    this.appareils[index].status = 'allumé';
  }

  switchOffOne(index: number) {
    this.appareils[index].status = 'éteint';
  }

}