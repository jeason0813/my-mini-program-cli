// 获取localstorage
function getOfflineStorage(key) {
  let value;
  try {
    value = wx.getStorageSync(key);
  } catch (e) {
    wx.showToast({
      title: e,
      icon: 'none',
      duration: 2000
    });
  }
  return value;
}

// 设置localstorage
function setOfflineStorage(key, value) {
  try {
    wx.setStorageSync(key, value);
  } catch (e) {
    wx.showToast({
      title: e,
      icon: 'none',
      duration: 2000
    });
  }
}

// 清除localstorage
function clearOfflineStorage() {
  try {
    wx.clearStorageSync();
  } catch (e) {
    wx.showToast({
      title: e,
      icon: 'none',
      duration: 2000
    });
  }
}

// 获取全局data
function getGlobalAppData(key) {
  const appGlobal = getApp();
  if (appGlobal.appData && typeof appGlobal.appData === 'object') {
    return appGlobal.appData[key];
  }
  return '';
}

// 设置全局data
function setGlobalAppData(key, value) {
  const appGlobal = getApp();
  if (appGlobal.appData && typeof appGlobal.appData === 'object') {
    appGlobal.appData[key] = value;
  } else {
    appGlobal.appData = {};
    appGlobal.appData[key] = value;
  }
}

// 取得系统参数obj， 包括微信版本，一些手机信息
function getSystemInfo() {
  let value;
  try {
    value = wx.getSystemInfoSync();
  } catch (e) {
    wx.showToast({
      title: e,
      icon: 'none',
      duration: 2000
    });
  }
  return value;
}

// 取得系统 状态栏高度 数字
function getStatusBarHeight() {
  return getSystemInfo().statusBarHeight;
}

// 取得当前微信版本号
function getWechatVersion() {
  if (getSystemInfo() && (typeof getSystemInfo() === 'object')) {
    return getSystemInfo().version;
  }
  return '';
}

// 微信版本号与输入的版本号对比
function isWechatVersionEqualOrGreaterThan(comparedVersion) {
  const currentVersion = getWechatVersion();
  if (currentVersion) {
    const comparedVersionNumber = Number(comparedVersion.split('.').join(''));
    const currentVersionNumber = Number(currentVersion.split('.').join(''));
    return currentVersionNumber >= comparedVersionNumber;
  }
  return false;
}

// 页面跳转，例 goTo('../index/main')
function goTo(url) {
  wx.navigateTo({ url });
}

const DI = {
  getOfflineStorage,
  setOfflineStorage,
  clearOfflineStorage,
  getGlobalAppData,
  setGlobalAppData,
  getSystemInfo,
  getStatusBarHeight,
  getWechatVersion,
  isWechatVersionEqualOrGreaterThan,
  goTo
};

export default DI;

