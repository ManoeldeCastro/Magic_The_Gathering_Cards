interface ItemsPerPageFilterProps {
  value: string
  defaultValue: string
  handleChange: (newRpp: string) => void
}

export function ItemsPerPageFilter({
  value,
  defaultValue,
  handleChange
}: ItemsPerPageFilterProps) {
  return (
    <div className='items-per-page-filter'>
      <label htmlFor='itemsPerPage' className='mr-2'>
        Itens por página:
      </label>
      <select
        id='itemsPerPage'
        value={value}
        defaultValue={defaultValue}
        onChange={e => handleChange(e.target.value)}
        className='border rounded p-2'
      >
        <option value='10'>10</option>
        <option value='15'>15</option>
        <option value='20'>20</option>
        <option value='71'>25</option>
      </select>
    </div>
  )
}
