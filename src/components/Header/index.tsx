import Link from 'next/link';
import Image from 'next/image';

import logoImg from '../../assets/logo.svg';

import { HeaderContainer } from './styles';
import { Cart } from '../Cart';
import { useRouter } from 'next/router';

const Header = () => {
  const { pathname } = useRouter();

  const showCartButton = pathname !== 'success';

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>

      {showCartButton && <Cart />}
    </HeaderContainer>
  );
};

export { Header };
