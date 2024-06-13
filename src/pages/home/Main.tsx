import ImgCards from '../../assets/main-cards.svg'

export function Main() {
  return (
    <>
      <div className='mt-4 flex flex-wrap items-center justify-evenly gap-10 px-10 pb-20 flex-col'>
        <div className='flex flex-col items-start'>
          <h1 className='text-5xl font-bold tracking-tight'>Bem vindo ao Magic: The Gathering - Cards</h1>
          <p className='ml-[3px] text-lg font-semibold tracking-tight text-muted-foreground'>Construa um deck invencível</p>
        </div>

        <div>
        <img className='w-[48rem] 2xl:w-[56rem]' src={ImgCards} alt='' />
        </div>
      </div>
    </>
  )
}
