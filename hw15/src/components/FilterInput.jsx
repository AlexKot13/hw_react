

export const FilterInput = ({ filter, onFilterChange }) => {
  return (
    <input 
    type="text"
    placeholder="Фильтр по имени"
    value={filter}
    onChange={(e) => onFilterChange(e.target.value)}
    style={{ padding: '0.5em', borderRadius: '4px'}}
    />
  )
} 