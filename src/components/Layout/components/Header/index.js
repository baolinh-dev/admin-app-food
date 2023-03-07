import styles from './Header.module.scss';
import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

var cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('header')}>
            <h3>Name</h3>
            <div className={cx('search')}> 
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input placeholder="Search ..." type="text" className={cx('search-input')} />
            </div>
            <div className={cx('account')}>
                <img
                    src="https://th.bing.com/th/id/R.5d1eeb5627d4dfcf476b283c4a928863?rik=UwqkH4AwDVOyjA&pid=ImgRaw&r=0"
                    alt=""
                    className={cx('account-img')}
                />
                <div className={cx('account-infor')}>
                    <div className={cx('account-name')}>Trần Bảo Linh</div>
                    <div className={cx('account-possition')}>Admin</div>
                </div>
            </div>
        </div>
    );
}

export default Header;
