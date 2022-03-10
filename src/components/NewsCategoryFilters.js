
const NewsCategoryFilters = () => {
    const countries = [
        { countryCode: 'us', label: 'US' },
        { countryCode: 'gb', label: 'UK' },
        { countryCode: 'fr', label: 'France' },
        { countryCode: 'au', label: 'Australia' },
        { countryCode: 'in', label: 'India' },
    ]
    return (
        <div>
            <div className="sm:hidden">
                <select
                id="tabs"
                name="tabs"
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                defaultValue={'us'}
                >
                {countries.map((tab) => (
                    <option key={tab.label}>{tab.label}</option>
                ))}
                </select>
            </div>
            <div className="hidden sm:block">
                <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    {countries.map((country) => (
                    country.label
                    ))}
                </nav>
                </div>
            </div>
        </div>
    )
}

export default NewsCategoryFilters;
