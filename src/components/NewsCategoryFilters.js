
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
