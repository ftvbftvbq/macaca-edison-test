const path = require('path');
const wd = require('wd');

describe('MXD mobile DEMO1', function() {
  this.timeout(5 * 60 * 1000); // mocha 设置超时时间

  var driver = wd.promiseChainRemote({ // 初始化 webdriver
    host: 'localhost',
    port: 3456
  });

  before(function() { // iOS需要传 udid 和 bundleId
    return driver.init({
      platformName: 'iOS',
      udid: '3ea21f571055fd7a972bc8ebdbcdff21e422c730',
      bundleId: 'nonobank.Nonobankmxd'
    });
  });

  it('#1 test click me tab', function() { // 测试一下点击 我 tab
    return driver
          .elementByNameIfExists('我')
          .elementByName('我')
          .click()
          .elementByNameIfExists('注册')
          .elementByName('注册')
          .click();
  });
  
  it('#2 test enter mobil number', function() {
    return driver
          .elementByNameIfExists('您的手机号')
          .elementByName('您的手机号')
          .click()
          .sendKeys("13918304567")
          .elementByNameIfExists('下一步')
          .elementByName('下一步')
          .click();
  });

  it('#3 test reg user', function() {
    return driver
          .elementByNameIfExists('图形验证码')
          .elementByName('图形验证码')
          .click()
          .sendKeys("a1b0")
          .sleep(1000)

          .elementByNameIfExists('获取验证码')
          .elementByName('获取验证码')
          .click()
          .sleep(1000)
          .elementByNameIfExists('手机验证码')
          .elementByName('手机验证码')
          .click()
          .sendKeys("0615")
          .sleep(1000)

          .elementByNameIfExists('您的密码')
          .elementByName('您的密码')
          .click()
          .sendKeys("it789123")
          .sleep(1000)

          .elementByNameIfExists('完成注册')
          .elementByName('完成注册')
          .click()
          .takeScreenshot();
  });

  after(function() { // 所有测试用例的统一后置动作
    return driver
      .sleep(1000)
      .quit();
  });
});
