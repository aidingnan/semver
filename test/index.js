const { expect } = require('chai')

const r = /^v[1-9][0-9]*\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)(|-(alpha|beta|rc[1-9][0-9]*))$/

const m = {
  "v0": false,
  "v.0": false,
  "v0.": false,
  "v1": false,
  "v1.0": false,
  "v1.0.": false,
  "v1.0.0": true,
  "v0.0.0": false,
  "v1.00.0": false,
  "v1.01.0": false,   
  "v.1.2.1": false,
  "v1.0.0-": false,
  "v1.0.0a": false,
  "v1.0.0-alpha": true,
  "v1.0.0-beta": true,
  "v1.0.0-rc0": false,
  "v1.0.0-rc1": true,
  "v1.0.0-rc01":false,
  "v1.0.0-rc11": true,
}

describe('valid semver', () => {
/*
  for (let t in m) {
    it(`${t} ${m[t] ? 'good' : 'bad'}`, () => expect(r.test(t) === m[t]).to.be.true)
  }

*/
  Object.keys(m).forEach(t => it(`${t} ${m[t] ? 'good' : 'bad'}`, () => expect(r.test(t) === m[t]).to.be.true))


})
