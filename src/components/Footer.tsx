import ImgLogo from '../assets/magic-logo.svg';

export const Footer = () => {
  return (
    <footer className="flex justify-center h-28 w-full items-center gap-7 bg-header">
      <img className="w-[12rem]" src={ImgLogo} alt="" />
      <span className="text-white/65">
        Produzido por Manoel Dias - &copy; Magic: The Gathering - Cards 
      </span>
    </footer>
  )
}
