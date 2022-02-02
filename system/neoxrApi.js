class NeoxrApi {
   baseUrl = 'https://api.neoxr.eu.org/api'
   apiKey = null

   constructor(apiKey) {
      this.apiKey = apiKey || ''
   }

   async ig(url) {
      let json = await Func.fetchJson(this.baseUrl + '/ig?url=' + url + '&IEAZN1H1wN=' + this.apiKey)
      return json
   }

   async igs(url) {
      let json = await Func.fetchJson(this.baseUrl + '/igs2?q=' + Func.igFixed(url) + '&IEAZN1H1wN=' + this.apiKey)
      return json
   }

   async pin(url) {
      let json = await Func.fetchJson(this.baseUrl + '/pin?url=' + url + '&IEAZN1H1wN=' + this.apiKey)
      return json
   }

   async mediafire(url) {
      let json = await Func.fetchJson(this.baseUrl + '/mediafire?url=' + url + '&IEAZN1H1wN=' + this.apiKey)
      return json
   }

   async tiktok(url) {
      let json = await Func.fetchJson(this.baseUrl + '/tiktok?url=' + url + '&IEAZN1H1wN=' + this.apiKey)
      return json
   }

   async twitter(url) {
      let json = await Func.fetchJson(this.baseUrl + '/twitter?url=' + url + '&IEAZN1H1wN=' + this.apiKey)
      return json
   }

   async soundcloud(url) {
      let json = await Func.fetchJson(this.baseUrl + '/soundcloud?url=' + url + '&IEAZN1H1wN=' + this.apiKey)
      return json
   }
}

exports.NeoxrApi = NeoxrApi
