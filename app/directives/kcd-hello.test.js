module.exports = (ngModule) => {
  describe('kcd-hello', () => {
    beforeEach(window.module(ngModule.name));

    it('should fail properly', () => {
      expect(true).to.be.true;
    });
  });
};
