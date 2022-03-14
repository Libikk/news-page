const classNames = (...classes) => classes.filter(Boolean).join(' ')

const NewsCategoryFilters = ({ countries, currentTab, setCurrentTab }) => {
    const isCurrentTab = (tab) => currentTab.countryCode === tab.countryCode;

return (
    <div>
        <div className="sm:hidden">
            <select
                id="tabs"
                name="tabs"
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                defaultValue={currentTab.label}
            >
            {countries.map((country) => (
                <option key={country.label}>{country.label}</option>
            ))}
            </select>
        </div>
        <div className="hidden sm:block">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                {countries.map((country) => (
                <button
                    key={country.countryCode}
                    className={classNames(
                    isCurrentTab(country)
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200',
                    'whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm items-center'
                    )}
                    onClick={() => setCurrentTab(country)}
                    aria-current={isCurrentTab(country) ? 'page' : undefined}
                >
                    {country.label}
                    <div>
                        <img src={`https://flagcdn.com/16x12/${country.countryCode}.png`} className="ml-1 mt-px" width="16" height="12" alt={country.label} />
                    </div>
                </button>
                ))}
            </nav>
        </div>
    </div>)
}

export default NewsCategoryFilters;
