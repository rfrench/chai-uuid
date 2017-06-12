var chai = require('chai');
chai.use(require('../index'));
var expect = chai.expect;
var should = chai.should();
var assert = chai.assert;

describe('Validate UUID', function(){
  describe('Any Version', function() {
    var uuid = '8becb83e-7125-1488-b56d-af27d19d313e';

    it('should successfully validate a UUID (any version)', function() {
      expect(uuid).to.be.a.uuid();
    });

    it('should successfully validate an uppercase UUID (any version)', function() {
      expect(uuid.toUpperCase()).to.be.a.uuid();
    });

    it('should successfully validate a UUID (any version) using the "guid" method', function() {
      expect(uuid).to.be.a.guid();
    });

    it('should successfully validate a UUID (any version) using "should" style testing', function() {
      uuid.should.be.a.uuid('v1');
    });

    it('should successfully validate a UUID (any version) using "assert" style testing', function() {
      assert.uuid(uuid, 'v1');
    });

    it('should successfully validate a GUID (any version) using "assert" style testing', function() {
      assert.guid(uuid, 'v1');
    });
  });

  describe('V1', function() {
    var v1 = '6866b356-4d73-11e7-b114-b2f933d5fe66';

    it('should successfully validate a v1 UUID', function() {
      expect(v1).to.be.a.uuid('v1');
    });

    it('should successfully validate an uppercase v1 UUID', function() {
      expect(v1.toUpperCase()).to.be.a.uuid('v1');
    });

    it('should fail to validate an v1 UUID when the UUID is v4', function() {
      var v4 = '6000ad5c-5f8e-43f6-ba09-fba7e844a674';
      try {
        expect(v4).to.be.a.uuid('v1');
      }
      catch(e) {
        expect(e.message).to.equal('expected \'6000ad5c-5f8e-43f6-ba09-fba7e844a674\' to be a valid UUID v1')
      }
    });
  });

  describe('V2', function() {
    var v2 = 'cd4c9471-832c-274b-828b-0208b26cc132';

    it('should successfully validate a v2 UUID', function() {
      expect(v2).to.be.a.uuid('v2');
    });

    it('should successfully validate an uppercase v2 UUID', function() {
      expect(v2.toUpperCase()).to.be.a.uuid('v2');
    });

    it('should fail to validate an v2 UUID when the UUID is v4', function() {
      var v4 = '6000ad5c-5f8e-43f6-ba09-fba7e844a674';
      try {
        expect(v4).to.be.a.uuid('v2');
      }
      catch(e) {
        expect(e.message).to.equal('expected \'6000ad5c-5f8e-43f6-ba09-fba7e844a674\' to be a valid UUID v2')
      }
    });
  });

  describe('V3', function() {
    var v3 = 'df4efe51-9457-3f35-875d-df5821afcdbf';

    it('should successfully validate a v3 UUID', function() {
      expect(v3).to.be.a.uuid('v3');
    });

    it('should successfully validate an uppercase v3 UUID', function() {
      expect(v3.toUpperCase()).to.be.a.uuid('v3');
    });

    it('should fail to validate an v3 UUID when the UUID is v4', function() {
      var v4 = '6000ad5c-5f8e-43f6-ba09-fba7e844a674';
      try {
        expect(v4).to.be.a.uuid('v3');
      }
      catch(e) {
        expect(e.message).to.equal('expected \'6000ad5c-5f8e-43f6-ba09-fba7e844a674\' to be a valid UUID v3')
      }
    });
  });

  describe('V4', function() {
    var v4 = '94126908-4b30-47c1-bc56-1d39e2c3334f';

    it('should successfully validate a v4 UUID', function() {
      expect(v4).to.be.a.uuid('v4');
    });

    it('should successfully validate an uppercase v4 UUID', function() {
      expect(v4.toUpperCase()).to.be.a.uuid('v4');
    });

    it('should fail to validate an v4 UUID when the UUID is v1', function() {
      var v1 = '6000ad5c-5f8e-13f6-ba09-fba7e844a674';
      try {
        expect(v1).to.be.a.uuid('v4');
      }
      catch(e) {
        expect(e.message).to.equal('expected \'6000ad5c-5f8e-13f6-ba09-fba7e844a674\' to be a valid UUID v4')
      }
    });
  });

  describe('V5', function() {
    var v5 = '511ff25d-ca33-536e-89a7-d3dfebc23e2a';

    it('should successfully validate a v5 UUID', function() {
      expect(v5).to.be.a.uuid('v5');
    });

    it('should successfully validate an uppercase v5 UUID', function() {
      expect(v5.toUpperCase()).to.be.a.uuid('v5');
    });

    it('should fail to validate an v5 UUID when the UUID is v1', function() {
      var v1 = '6000ad5c-5f8e-13f6-ba09-fba7e844a674';
      try {
        expect(v1).to.be.a.uuid('v5');
      }
      catch(e) {
        expect(e.message).to.equal('expected \'6000ad5c-5f8e-13f6-ba09-fba7e844a674\' to be a valid UUID v5')
      }
    });
  });
});