import { useState } from 'react'

const classNames = (...classes) => classes.filter(Boolean).join(' ')


const NewsCategoryFilters = () => {
    const countries = [
        { countryCode: 'us', label: 'US' },
        { countryCode: 'gb', label: 'UK' },
        { countryCode: 'fr', label: 'France' },
        { countryCode: 'au', label: 'Australia' },
        { countryCode: 'in', label: 'India' },
    ]
    const [firstInitialTab] = countries;
    const [currentTab, setCurrentTab] = useState(firstInitialTab)
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
            {countries.map((tab) => (
                <option key={tab.label}>{tab.label}</option>
            ))}
            </select>
        </div>
        <div className="hidden sm:block">
            <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                {countries.map((country) => (
                <button
                    key={country.countryCode}
                    className={classNames(
                    isCurrentTab(country)
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200',
                    'whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm'
                    )}
                    onClick={() => setCurrentTab(country)}
                >
                    {country.label}
                </button>
                ))}
            </nav>
            </div>
        </div>
    </div>)
}

export default NewsCategoryFilters;
