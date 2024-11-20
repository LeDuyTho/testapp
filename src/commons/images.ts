export default {
  empty: require('../assets/icon/empty_item.png'),
  programming: require('../assets/icon/programming.png'),
  viettelPay: require('../assets/icon/viettel_pay_2.png'),
  vnptPay: require('../assets/icon/vnpt_pay.png'),
  //
  giaovien: require('../assets/icon/teacher_main.png'),
  phuhuynh: require('../assets/icon/parents_main.png'),
};

export function getHomeMenuImage(icon: string) {
  switch (icon) {
    case 'cackhoanthu.png':
      return require('../assets/ic_menu/cackhoanthu.png');

    case 'capnhatcackhoanthu.png':
      return require('../assets/ic_menu/capnhatcackhoanthu.png');

    case 'capnhatdiem.png':
      return require('../assets/ic_menu/capnhatdiem.png');

    case 'cauhinhtaikhoanthu.png':
      return require('../assets/ic_menu/cauhinhtaikhoanthu.png');

    case 'chatluongdoingugiaovien.png':
      return require('../assets/ic_menu/chatluongdoingugiaovien.png');

    case 'danhsachhocsinh.png':
      return require('../assets/ic_menu/danhsachhocsinh.png');

    case 'diemdanh.png':
      return require('../assets/ic_menu/diemdanh.png');

    case 'hocbadientu.png':
      return require('../assets/ic_menu/hocbadientu.png');

    case 'hoclieuhoctap.png':
      return require('../assets/ic_menu/hoclieuhoctap.png');

    case 'hoidap.png':
      return require('../assets/ic_menu/hoidap.png');

    case 'ketquahoctap.png':
      return require('../assets/ic_menu/ketquahoctap.png');

    case 'lichbaogiang.png':
      return require('../assets/ic_menu/lichbaogiang.png');

    case 'lienkettaikhoan.png':
      return require('../assets/ic_menu/lienkettaikhoan.png');

    case 'phanquyen.png':
      return require('../assets/ic_menu/phanquyen.png');

    case 'quanhegiadinh.png':
      return require('../assets/ic_menu/quanhegiadinh.png');

    case 'thoikhoabieu.png':
      return require('../assets/ic_menu/thoikhoabieu.png');

    case 'thongtincosovatchat.png':
      return require('../assets/ic_menu/thongtincosovatchat.png');

    case 'thongtingiaovien.png':
      return require('../assets/ic_menu/thongtingiaovien.png');

    case 'thongtinhocsinh.png':
      return require('../assets/ic_menu/thongtinhocsinh.png');

    case 'traodoivoiphuhuynh.png':
      return require('../assets/ic_menu/traodoivoiphuhuynh.png');

    case 'xacnhanvang.png':
      return require('../assets/ic_menu/xacnhanvang.png');

    case 'xemtailieuhoctap.png':
      return require('../assets/ic_menu/xemtailieuhoctap.png');

    case 'xinphepvang.png':
      return require('../assets/ic_menu/xinphepvang.png');

    default:
      return require('../assets/ic_menu/diemdanh.png');
  }
}
