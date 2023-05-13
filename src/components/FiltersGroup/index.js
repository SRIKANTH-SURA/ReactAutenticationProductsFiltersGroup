import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  //   const {updateSearchInput} = props
  const renderRatingList = () => {
    const {ratingsList, onSelectRating, activeRatingId} = props
    return (
      <>
        <h1 className="rating-heading">Rating</h1>
        <ul className="rating-list">
          {ratingsList.map(each => {
            const isRatingActive = activeRatingId === each.ratingId
            const activeRatingClass = isRatingActive ? 'active-class' : ''
            return (
              <li key={each.ratingId} className="rating-item">
                <button
                  className={`star-img-btn ${activeRatingClass}`}
                  type="button"
                  onClick={() => onSelectRating(each.ratingId)}
                >
                  <img
                    className="rating-img"
                    src={each.imageUrl}
                    alt={`rating ${each.ratingId}`}
                  />
                  & Up
                </button>
              </li>
            )
          })}
        </ul>
      </>
    )
  }

  const renderCategoryList = () => {
    const {categoryOptions, onSelectCategory, activeCategoryId} = props
    return (
      <>
        <h1 className="category-heading">Category</h1>
        <ul className="category-list">
          {categoryOptions.map(each => {
            const isCategoryActive = each.categoryId === activeCategoryId
            const activeCategoryClass = isCategoryActive ? 'active-class' : ''
            return (
              <li key={each.categoryId} className="category-item">
                <p
                  className={`category-btn ${activeCategoryClass}`}
                  //   type="button"
                  onClick={() => onSelectCategory(each.categoryId)}
                >
                  {each.name}
                </p>
              </li>
            )
          })}
        </ul>
      </>
    )
  }

  const {updateSearchInput, titleSearch, onEnterBtnCliked} = props

  const onChangeSearchInput = event => {
    updateSearchInput(event.target.value)
  }

  const searchInputElement = () => (
    <div className="search-container">
      <input
        className="search-input"
        type="search"
        value={titleSearch}
        placeholder="Search"
        onChange={onChangeSearchInput}
        onKeyDown={event => event.key === 'Enter' && onEnterBtnCliked()}
      />
      <BsSearch className="search-icon" />
    </div>
  )

  const {clearFilters} = props

  return (
    <div className="filters-group-container">
      {searchInputElement()}
      {renderCategoryList()}
      {renderRatingList()}
      <button
        className="clear-btn"
        type="button"
        onClick={() => clearFilters()}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
