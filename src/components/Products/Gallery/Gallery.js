import React from 'react'
import './Gallery.css'
import { Transition } from 'react-transition-group'

const PICS_WIDTH = '250px'
const FADE_DURATION = 500

const defaultStyle = {
    transition: `opacity ${FADE_DURATION}ms ease-in-out`,
    opacity: 0,
  }
  
  const transitionStyles = {
    entering: { opacity: 0 },
    entered:  { opacity: 0 },
    exiting:  { opacity: 1 },
    exited:  { opacity: 1 },
  };

class Gallery extends React.Component {
    state = {
        activeTab: 'all',
        animationActive: false
    }
    categories = ['print template', 'web template', 'user interface', 'mock-up']

    handleCategoryChange = (event) => {
        const category = event.target.innerText.toLowerCase()
        document.getElementsByClassName('gallery-button')[0].style.color = '#000000'
        document.getElementsByClassName('gallery-button')[1].style.color = '#000000'
        document.getElementsByClassName('gallery-button')[2].style.color = '#000000'
        document.getElementsByClassName('gallery-button')[3].style.color = '#000000'
        document.getElementsByClassName('gallery-button')[4].style.color = '#000000'
        event.target.style.color = '#ff2d2d'
        this.setState({animationActive: true})
        setTimeout(() => this.setState({activeTab: category}), FADE_DURATION*2);
        
    }

    getCategoryFolder(category) {
        switch(category.toLowerCase()) {
            case 'print template': return 'print_temp'
            case 'web template': return 'web_temp'
            case 'user interface': return 'ui'
            case 'mock-up': return 'mock-up'
            case 'all': return null
            default: throw new Error('Wrong category value ' + category)
        }
    }

    render() {
        const buttons = this.categories.map(category => (
            <button key={category} className="gallery-button" onClick={this.handleCategoryChange}>{category}</button>
        ))

        const pics = []
        if (this.state.activeTab == 'all') {
            this.categories.forEach(category => {
                pics.push(<img key={category + '1'} src={`img/products/${this.getCategoryFolder(category)}/1.jpg`} width={PICS_WIDTH}/>)
                pics.push(<img key={category + '8'} src={`img/products/${this.getCategoryFolder(category)}/8.jpg`} width={PICS_WIDTH}/>)
            })
        }
        else {
            for (var i = 1; i <= 8; i++) {
                pics.push(<img key={this.state.activeTab + i} src={`img/products/${this.getCategoryFolder(this.state.activeTab)}/${i}.jpg`} width={PICS_WIDTH}/>)
            }
        }
        
        return (
            <div className="Gallery">
                <section className="gallery-nav">
                    <button className="gallery-button" style={{color:'#ff2d2d'}} onClick={this.handleCategoryChange}>all</button>
                    {buttons}
                </section>
                <Transition in={this.state.animationActive} timeout={FADE_DURATION*2} onEntered={() => this.setState({animationActive: false})}>
                    {state => (
                        <section className="gallery-pics" style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                          }}>
                              {pics}
                        </section>
                    )}
                </Transition>
                
            </div>
        )
    }
}

export default Gallery