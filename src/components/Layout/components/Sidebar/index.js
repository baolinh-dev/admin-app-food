import images from '~/assets/images';
import { NavLink } from 'react-router-dom';

import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faGauge, faUserGear, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser, faSquare, faUser } from '@fortawesome/free-regular-svg-icons';

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
                            <FontAwesomeIcon className={cx('item-icon')} icon={faGauge} />
                            <span>DashBoard</span>
                        </NavLink>
                    </li>
                    <li className={cx('item')}>
                        <NavLink className={cx('anchor')} to="/accounts">
                            <FontAwesomeIcon className={cx('item-icon')} icon={faCircleUser} />
                            <span>Accounts</span>
                        </NavLink>
                    </li>
                    <li className={cx('item')}>
                        <NavLink className={cx('anchor')} to="/warehouse">
                            <FontAwesomeIcon className={cx('item-icon')} icon={faWarehouse} />
                            <span>Warehouse</span>
                        </NavLink>
                    </li>
                    <li className={cx('item')}>
                        <NavLink className={cx('anchor')} to="/orders">
                            <FontAwesomeIcon className={cx('item-icon')} icon={faClipboardList} />
                            <span>Orders</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;
