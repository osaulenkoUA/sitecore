import style from './Header.module.scss';
import Link from 'next/link';
const Header = (props: any): JSX.Element => {
  console.log(props);
  const { fields } = props;
  const color: string = props.fields.color.value;

  return (
    <div className={style.wrapHeader} style={{ backgroundColor: color }}>
      <ul className="nav">
        {fields.listLinks.map((el: any) => (
          <li key={el.name}>
            <Link href={el.fields.link.value.href ?? '/'}>
              <a>{el.fields.name.value}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
