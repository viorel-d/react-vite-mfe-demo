import { useState, useEffect } from 'react'
import Card from 'remote/Card'
import './Tabs.css'

type Tab = {
    id: string
    name: string
    renderCard: () => JSX.Element
}

const tabs: Tab[] = [{
    id: 'tab1',
    name: 'Tab 1',
    renderCard: () => <Card />,
}, {
    id: 'tab2',
    name: 'Tab 2',
    renderCard: () => <Card />,
}]

function Tabs() {
    const [selected, setSelected] = useState('');
    const [tab, setTab] = useState<Tab | null>(null);

    useEffect(() => {
        const t = tabs.find(({ id }) => id === selected);
        if (t) {
            setTab(t);
        }
    }, [selected]);
 
    return (
        <div className='tabs'>
            { tabs.map((t) => {
                const isSelected = t.id === selected;
                const cName = `tab ${isSelected ? 'selected' : ''}`;
    
                return (
                    <div className='tab-container'>
                        <div className={cName} key={t.id} onClick={() => setSelected(t.id)}>
                            {t.name}
                        </div>
                    </div>
                )
            }) }
            { tab !== null ? (
                <div className='card-container'>
                    {tab.renderCard()}
                </div>
            ) : null }
        </div>
    )
}

export default Tabs;
