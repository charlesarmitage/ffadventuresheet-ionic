describe('Fantasy Adventure Sheet', function() {
  var statistics = element.all(by.repeater('statistic in statistics'));

  beforeEach(function() {
    browser.get('http://localhost:9000/#/app/home');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Fantasy Adventure Sheet');
  });

   it('should have three statistics', function() {
    expect(statistics.count()).toEqual(3);
  });

  it('should have "skill", "stamina" & "luck" statistics', function() {
    // Expect statistics to be in correct order
    expect(statistics.get(0).getText()).toEqual('Skill\n'
                                              + 'Current: 0\n'
                                              + 'Initial: 0');
    expect(statistics.get(1).getText()).toEqual('Stamina\n'
                                              + 'Current: 0\n'
                                              + 'Initial: 0');
    expect(statistics.get(2).getText()).toEqual('Luck\n'
                                              + 'Current: 0\n'
                                              + 'Initial: 0');
  });

});
