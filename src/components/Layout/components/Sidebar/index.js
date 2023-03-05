import images from '~/assets/images'; 
import { NavLink } from 'react-router-dom'; 

import styles from './Navigation.module.scss';
import classNames from 'classnames/bind';  
var cx = classNames.bind(styles);

function Navigation() {
    return (
        <div className={cx('sidebar')}> 
            <div className={cx('logo')}> 
                <img className={cx('logo-img')} src={images.logo} alt="" /> 
                <h3 className={cx('logo-text')}>App Food</h3>
            </div>
            <div className={cx('navi')}>
                <ul className={cx('list')}>
                    <li className={cx('item')}>
                        <NavLink className={cx('anchor')} to="/">
                            DashBoard
                        </NavLink>
                    </li>
                    <li className={cx('item')}>
                        <NavLink className={cx('anchor')} to="/accounts">
                            Accounts
                        </NavLink>
                    </li>
                    <li className={cx('item')}>
                        <NavLink className={cx('anchor')} to="/warehouse">
                            Warehouse
                        </NavLink>
                    </li>
                    <li className={cx('item')}>
                        <NavLink className={cx('anchor')} to="/orders">
                            Orders
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;
