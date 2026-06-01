function Slidebar({activePage, setActivePage}){
    const navItem = [
        {label: 'DashBoard', key: 'dashboard'},
        {label: 'Add Transaction', key: 'add'},
        {label:'History', key: 'history'},
        {label: 'Budget', key: 'budget'}
    ]
 
    return(
        <>
        <div className="fixed left-0 top-0 h-screen w-56 bg-gray-900 p-6 flex flex-col">
            <h1 className="text-3xl text-white font-bold mb-4">Spendly.In</h1>
            <nav>
                {navItem.map((item) => (
                    <div
                    key={item.key}
                    onClick={() => setActivePage(item.key)}
                    className={`py-3 px-4 rounded-lg cursor-pointer mb-1 font-medium transition-colors
                        ${activePage === item.key
                            ? 'bg-violet-600 text-white' :
                            'text-gray-400 hover:bg-gray-800 hover:text-white'
                        }`}
                    >
                        
                        {item.label}
                    </div>
                ))}

            </nav>
            </div>
        </>
    );
}

export default Slidebar