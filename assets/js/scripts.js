/////////////////////////////// NEW GLIDER SLIDER JS //////////////////////////////////
flatpickr(".flatpickr-input", 
    {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
    }
);

if (document.querySelector('.rentalslider')) {
new Glider(document.querySelector('.rentalslider'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots1',
    arrows: {
        prev: '#glider-prev-1',
        next: '#glider-next-1'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '5',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1441,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
        }
        },{
            // screens greater than >= 1024px
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }
    ]
    
});
}
if (document.querySelector('.monthslider')) {
new Glider(document.querySelector('.monthslider'), {
    // Mobile-first defaults
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots2',
    arrows: {
        prev: '#glider-prev-2',
        next: '#glider-next-2'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '5',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
        }
        }
    ]
    
});
}
if (document.querySelector('.guarantee-slider')) {
new Glider(document.querySelector('.guarantee-slider'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots3',
    arrows: {
        prev: '#glider-prev-3',
        next: '#glider-next-3'
    },
    responsive: [
        {
            // screens greater than >= 768px
            breakpoint: 500,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: '2',
                slidesToScroll: '1',
            }
        },
        {
        // screens greater than >= 768px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '2',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
        }
    ]
});
}
if (document.querySelector('.guarantee-sliders')) {
new Glider(document.querySelector('.guarantee-sliders'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots4',
    arrows: {
        prev: '#glider-prev-4',
        next: '#glider-next-4'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '1',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        }
    ]
});
}
if (document.querySelector('.hera_slider1')) {
new Glider(document.querySelector('.hera_slider1'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots5',
    arrows: {
        prev: '#glider-prev-5',
        next: '#glider-next-5'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '1',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        }
    ]
});
}
if (document.querySelector('.hera_slider2')) {
new Glider(document.querySelector('.hera_slider2'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots6',
    arrows: {
        prev: '#glider-prev-6',
        next: '#glider-next-6'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '1',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        }
    ]
});
}
if (document.querySelector('.hera_slider3')) {
new Glider(document.querySelector('.hera_slider3'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots7',
    arrows: {
        prev: '#glider-prev-7',
        next: '#glider-next-7'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '1',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        }
    ]
});
}
if (document.querySelector('.hera_slider4')) {
new Glider(document.querySelector('.hera_slider4'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots8',
    arrows: {
        prev: '#glider-prev-8',
        next: '#glider-next-8'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '1',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        }
    ]
});
}
if (document.querySelector('.gallery-5slide')) {
new Glider(document.querySelector('.gallery-5slide'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots9',
    arrows: {
        prev: '#glider-prev-9',
        next: '#glider-next-9'
    },
    responsive: [
        {
            // screens greater than >= 768px
            breakpoint: 500,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: '2',
                slidesToScroll: '1',
            }
        },
        {
        // screens greater than >= 768px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '3',
            slidesToScroll: '1',            
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
        }
        }
    ]
});
}
if (document.querySelector('.gallery-4slide')) {
new Glider(document.querySelector('.gallery-4slide'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots10',
    arrows: {
        prev: '#glider-prev-10',
        next: '#glider-next-10'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 500,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '2',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
        }
        }
    ]
});
}
if (document.querySelector('.gallery-3slide')) {
new Glider(document.querySelector('.gallery-3slide'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots11',
    arrows: {
        prev: '#glider-prev-11',
        next: '#glider-next-11'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 500,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '2',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
        }
    ]
});
}
if (document.querySelector('.gallery-2slide')) {
new Glider(document.querySelector('.gallery-2slide'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots12',
    arrows: {
        prev: '#glider-prev-12',
        next: '#glider-next-12'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 500,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '2',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }
        }
    ]
});
}
if (document.querySelector('.one_slidee')) {
new Glider(document.querySelector('.one_slidee'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots13',
    arrows: {
        prev: '#glider-prev-13',
        next: '#glider-next-13'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '1',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        }
    ]
});
}
if (document.querySelector('.home_car_cards')) {
new Glider(document.querySelector('.home_car_cards'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots14',
    arrows: {
        prev: '#glider-prev-14',
        next: '#glider-prev-14'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 500,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '2',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
        }
        }
    ]
});
}
if (document.querySelector('.car_cards1')) {
new Glider(document.querySelector('.car_cards1'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots17',
    arrows: {
        prev: '#glider-prev-17',
        next: '#glider-next-17'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 2,
            slidesToScroll: 1,
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
        }
        }
    ]
    
});
}
if (document.querySelector('.girlbgcards')) {
new Glider(document.querySelector('.girlbgcards'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots18',
    arrows: {
        prev: '#glider-prev-18',
        next: '#glider-next-18'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 2,
            slidesToScroll: 1,
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
        }
    ]
    
});
}
if (document.querySelector('.one_slide_test')) {
new Glider(document.querySelector('.one_slide_test'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots19',
    arrows: {
        prev: '#glider-prev-19',
        next: '#glider-next-19'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        }
    ]
    
});
}
if (document.querySelector('.book_cars')) {
new Glider(document.querySelector('.book_cars'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots15',
    arrows: {
        prev: '#glider-prev-15',
        next: '#glider-next-15'
    },
    responsive: [
        {
        // screens greater than >= 769px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '3',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
        }
        }
    ]
    
});
}
if (document.querySelector('.modernfleetslider')) {
new Glider(document.querySelector('.modernfleetslider'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots16',
    arrows: {
        prev: '#glider-prev-16',
        next: '#glider-next-16'
    },
    responsive: [
        {
        // screens greater than >= 769px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '1',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }
        }
    ]
    
});
}
if (document.querySelector('.threeslides')) {
new Glider(document.querySelector('.threeslides'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots20',
    arrows: {
        prev: '#glider-prev-20',
        next: '#glider-next-20'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '2',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1440,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
        }
    ]
    
});
}
if (document.querySelector('.suggestioncards')) {
new Glider(document.querySelector('.suggestioncards'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots21',
    arrows: {
        prev: '#glider-prev-21',
        next: '#glider-next-21'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '2',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
        }
    ]
});
}
if (document.querySelector('.suggestiondelivery')) {
new Glider(document.querySelector('.suggestiondelivery'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots22',
    arrows: {
        prev: '#glider-prev-22',
        next: '#glider-next-22'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '3',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
        }
    ]
});
}
if (document.querySelector('.circleslider')) {
new Glider(document.querySelector('.circleslider'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots23',
    arrows: {
        prev: '#glider-prev-23',
        next: '#glider-next-23'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 540,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '2',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
        }
    ]
});
}
if (document.querySelector('.carcards')) {
new Glider(document.querySelector('.carcards'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots24',
    arrows: {
        prev: '#glider-prev-24',
        next: '#glider-next-24'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '2',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
        }
    ]
});
}
if (document.querySelector('.free_consult_slider')) {
new Glider(document.querySelector('.free_consult_slider'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots25',
    arrows: {
        prev: '#glider-prev-25',
        next: '#glider-next-25'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '2',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
        }
    ]
});
}
if (document.querySelector('.contselslider')) {
new Glider(document.querySelector('.contselslider'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots26',
    arrows: {
        prev: '#glider-prev-26',
        next: '#glider-next-26'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '2',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
        }
        }
    ]
});
}
if (document.querySelector('.threeslides1')) {
new Glider(document.querySelector('.threeslides1'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots27',
    arrows: {
        prev: '#glider-prev-27',
        next: '#glider-next-27'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '2',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1440,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
        },{
            // screens greater than >= 1024px
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }
    ]
    
});
}
if (document.querySelector('.threeslidess')) {
new Glider(document.querySelector('.threeslidess'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots28',
    arrows: {
        prev: '#glider-prev-28',
        next: '#glider-next-28'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '2',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }
        }
    ]
    
});
}
if (document.querySelector('.oneslide')) {
new Glider(document.querySelector('.oneslide'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots29',
    arrows: {
        prev: '#glider-prev-29',
        next: '#glider-next-29'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '1',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        }
    ]
    
});
}
if (document.querySelector('.oneslide1')) {
new Glider(document.querySelector('.oneslide1'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots30',
    arrows: {
        prev: '#glider-prev-30',
        next: '#glider-next-30'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '1',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        }
    ]
    
});
}
if (document.querySelector('.testimonialslider')) {
new Glider(document.querySelector('.testimonialslider'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots31',
    arrows: {
        prev: '#glider-prev-31',
        next: '#glider-next-31'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '1',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        }
    ]
    
});
}
if (document.querySelector('.unlimitedslider')) {
new Glider(document.querySelector('.unlimitedslider'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots32',
    arrows: {
        prev: '#glider-prev-32',
        next: '#glider-next-32'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '1',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        }
    ]
});
}
if (document.querySelector('.box3slider')) {
new Glider(document.querySelector('.box3slider'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots33',
    arrows: {
        prev: '#glider-prev-33',
        next: '#glider-next-33'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '2',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1440,
        settings: {
            slidesToShow: 4.5,
            slidesToScroll: 1,
        }
        },{
            // screens greater than >= 1024px
            breakpoint: 1025,
            settings: {
                slidesToShow: 2.5,
                slidesToScroll: 1,
            }
        }
    ]
});
}
if (document.querySelector('.support_slider')) {
new Glider(document.querySelector('.support_slider'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots34',
    arrows: {
        prev: '#glider-prev-34',
        next: '#glider-next-34'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '2',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
        }
        }
    ]
});
}
if (document.querySelector('.four_slides1')) {
new Glider(document.querySelector('.four_slides1'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots35',
    arrows: {
        prev: '#glider-prev-35',
        next: '#glider-next-35'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 500,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '2',
            slidesToScroll: '1',
        }
        },
        {
        // screens greater than >= 768px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '3',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
        }
        }
    ]
});
}
if (document.querySelector('.four_slides2')) {
new Glider(document.querySelector('.four_slides2'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots36',
    arrows: {
        prev: '#glider-prev-36',
        next: '#glider-next-36'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 500,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '2',
            slidesToScroll: '1',
        }
        },
        {
        // screens greater than >= 768px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '3',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
        }
        }
    ]
});
}
if (document.querySelector('.four_slides3')) {
new Glider(document.querySelector('.four_slides3'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots37',
    arrows: {
        prev: '#glider-prev-37',
        next: '#glider-next-37'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 500,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '2',
            slidesToScroll: '1',
        }
        },
        {
        // screens greater than >= 768px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '3',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
        }
        }
    ]
});
}
if (document.querySelector('.four_slides4')) {
new Glider(document.querySelector('.four_slides4'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots38',
    arrows: {
        prev: '#glider-prev-38',
        next: '#glider-next-38'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 500,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '2',
            slidesToScroll: '1',
        }
        },
        {
        // screens greater than >= 768px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '3',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
        }
        }
    ]
});
}
if (document.querySelector('.newcompoo_slider_1')) {
new Glider(document.querySelector('.newcompoo_slider_1'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots39',
    arrows: {
        prev: '#glider-prev-39',
        next: '#glider-next-39'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 500,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '1',
            slidesToScroll: '1',
        }
        },
        {
        // screens greater than >= 768px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '2',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }
        }
    ]
});
}
if (document.querySelector('.newcompoo_slider_2')) {
new Glider(document.querySelector('.newcompoo_slider_2'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots40',
    arrows: {
        prev: '#glider-prev-40',
        next: '#glider-next-40'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 500,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '1',
            slidesToScroll: '1',
        }
        },
        {
        // screens greater than >= 768px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '1',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        }
    ]
});
}
if (document.querySelector('.quotes-row')) {
new Glider(document.querySelector('.quotes-row'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots41',
    arrows: {
        prev: '#glider-prev-41',
        next: '#glider-next-41'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 500,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '1',
            slidesToScroll: '1',
        }
        },
        {
        // screens greater than >= 768px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '2',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
        }
    ]
});
}
if (document.querySelector('.hire-row1')) {
new Glider(document.querySelector('.hire-row1'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots42',
    arrows: {
        prev: '#glider-prev-42',
        next: '#glider-next-42'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 500,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '1',
            slidesToScroll: '1',
        }
        },
        {
        // screens greater than >= 768px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '2',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
        }
    ]
});
}
if (document.querySelector('.hire-row2')) {
new Glider(document.querySelector('.hire-row2'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots43',
    arrows: {
        prev: '#glider-prev-43',
        next: '#glider-next-43'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 500,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '1',
            slidesToScroll: '1',
        }
        },
        {
        // screens greater than >= 768px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '2',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
        }
    ]
});
}
if (document.querySelector('.model-row')) {
new Glider(document.querySelector('.model-row'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots44',
    arrows: {
        prev: '#glider-prev-44',
        next: '#glider-next-44'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 500,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '2',
            slidesToScroll: '1',
        }
        },
        {
        // screens greater than >= 768px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '4',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
        }
        }
    ]
});
}
if (document.querySelector('.guarantee-sliders1')) {
new Glider(document.querySelector('.guarantee-sliders1'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots45',
    arrows: {
        prev: '#glider-prev-45',
        next: '#glider-next-45'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 500,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '1',
            slidesToScroll: '1',
        }
        },
        {
        // screens greater than >= 768px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '1',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        }
    ]
});
}
if (document.querySelector('.guarantee-sliders2')) {
new Glider(document.querySelector('.guarantee-sliders2'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots46',
    arrows: {
        prev: '#glider-prev-46',
        next: '#glider-next-46'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 500,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '1',
            slidesToScroll: '1',
        }
        },
        {
        // screens greater than >= 768px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '1',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        }
    ]
});
}
if (document.querySelector('.related_post_slider')) {
new Glider(document.querySelector('.related_post_slider'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots47',
    arrows: {
        prev: '#glider-prev-47',
        next: '#glider-next-47'
    },
    responsive: [
        {
        // screens greater than >= 768px
        breakpoint: 500,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '2',
            slidesToScroll: '1',
        }
        },
        {
        // screens greater than >= 768px
        breakpoint: 769,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '3',
            slidesToScroll: '1',
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1025,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
        }
        }
    ]
});
}
if (document.querySelector('.car_cards_slider')) {
    new Glider(document.querySelector('.car_cards_slider'), {
        // Mobile-first defaults
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '#dots48',
        arrows: {
            prev: '#glider-prev-48',
            next: '#glider-next-48'
        },
        responsive: [
            {
            // screens greater than >= 768px
            breakpoint: 500,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: '1',
                slidesToScroll: '1',
            }
            },
            {
            // screens greater than >= 768px
            breakpoint: 769,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: '1',
                slidesToScroll: '1',
            }
            },{
            // screens greater than >= 1024px
            breakpoint: 1025,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
            }
        ]
    });   
}
////////////// Other Functions JS //////////////////////////

// FAQ Accordians
document.querySelectorAll('.question_side .que').forEach(function(element) {
    element.addEventListener('click', function() {
        document.querySelectorAll('.question_side .que').forEach(function(el) {
            el.classList.remove('act');
        });
        this.classList.add('act');
    });
});
if (document.querySelector('#locationcheck')) {
// Return Location checkbox
document.querySelector('#locationcheck').addEventListener('click', function() {
    var selectLocation = document.querySelector('.select_location.return_location');
    if (selectLocation.style.display === 'none' || selectLocation.style.display === '') {
        selectLocation.style.display = 'block';
    } else {
        selectLocation.style.display = 'none';
    }
});

// Going location dropdown
document.addEventListener('DOMContentLoaded', function() {
    var items = [
        "<img src='assets/images/airoplane-icon.svg' alt=''>Athens International Airport - Greece", 
        "<img src='assets/images/metro-icon.svg' alt=''>Athens Metro Station - Greece",
        "<img src='assets/images/bus-icon.svg' alt=''>Athens Bus Station - Greece",
        "<img src='assets/images/port-icon.svg' alt=''>Athens Port - Greece",
        "<img src='assets/images/hotel-icon.svg' alt=''>Athens Hotel - Greece",
        "<img src='assets/images/city-center-icon.svg' alt=''>Athens City Center - Greece",
        "<img src='assets/images/train-icon.svg' alt=''>Athens Train Station - Greece",
        "<img src='assets/images/airoplane-icon.svg' alt=''>Athens International Airport - Greece", 
        "<img src='assets/images/metro-icon.svg' alt=''>Athens Metro Station - Greece",
        "<img src='assets/images/bus-icon.svg' alt=''>Athens Bus Station - Greece",
        "<img src='assets/images/port-icon.svg' alt=''>Athens Port - Greece",
        "<img src='assets/images/hotel-icon.svg' alt=''>Athens Hotel - Greece",
        "<img src='assets/images/city-center-icon.svg' alt=''>Athens City Center - Greece",
        "<img src='assets/images/train-icon.svg' alt=''>Athens Train Station - Greece"
    ];

    var goingLocationInput = document.querySelector('#going_location');
    var returnList = document.querySelector('.going_list');
    var noActiveCross = document.querySelector('.going_location .noactive_cross');
    var activeCross = document.querySelector('.going_location .active_cross');

    // Show dropdowns and filter items on input
    goingLocationInput.addEventListener('input', function() {
        var query = goingLocationInput.value.toLowerCase();
        var filteredItems = items.filter(function(item) {
            return item.toLowerCase().includes(query);
        });

        if (filteredItems.length) {
            returnList.innerHTML = '';
            returnList.style.display = 'block';
            filteredItems.forEach(function(item) {
                var div = document.createElement('div');
                div.className = 'dropdowns-item return_item';
                div.innerHTML = item;
                returnList.appendChild(div);
            });
        } else {
            returnList.style.display = 'none';
        }
    });

    // When an item is clicked, update the input and hide dropdowns
    returnList.addEventListener('click', function(event) {
        if (event.target.classList.contains('return_item')) {
            goingLocationInput.value = event.target.textContent.trim();
            returnList.style.display = 'none';
        }
    });

    // When the input is clicked, show the cross and hide search icon
    goingLocationInput.addEventListener('click', function() {
        if (noActiveCross) {
            noActiveCross.style.display = 'block';
        }
        if (activeCross) {
            activeCross.style.display = 'none';
        }
    });

    // When the cross is clicked, empty the input
    if (noActiveCross) {
        noActiveCross.addEventListener('click', function() {
            goingLocationInput.value = "";
        });
    }

    // Hide dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!goingLocationInput.contains(e.target) && !returnList.contains(e.target)) {
            returnList.style.display = 'none';
            if (noActiveCross) {
                noActiveCross.style.display = 'none';
            }
            if (activeCross) {
                activeCross.style.display = 'block';
            }
        }
    });
});
}
if (document.querySelector('#return_location')) {
// Return location dropdown
document.addEventListener('DOMContentLoaded', function() {
    var items = [
        "<img src='assets/images/airoplane-icon.svg' alt=''>Athens International Airport - Greece", 
        "<img src='assets/images/metro-icon.svg' alt=''>Athens Metro Station - Greece",
        "<img src='assets/images/bus-icon.svg' alt=''>Athens Bus Station - Greece",
        "<img src='assets/images/port-icon.svg' alt=''>Athens Port - Greece",
        "<img src='assets/images/hotel-icon.svg' alt=''>Athens Hotel - Greece",
        "<img src='assets/images/city-center-icon.svg' alt=''>Athens City Center - Greece",
        "<img src='assets/images/train-icon.svg' alt=''>Athens Train Station - Greece",
        "<img src='assets/images/airoplane-icon.svg' alt=''>Athens International Airport - Greece", 
        "<img src='assets/images/metro-icon.svg' alt=''>Athens Metro Station - Greece",
        "<img src='assets/images/bus-icon.svg' alt=''>Athens Bus Station - Greece",
        "<img src='assets/images/port-icon.svg' alt=''>Athens Port - Greece",
        "<img src='assets/images/hotel-icon.svg' alt=''>Athens Hotel - Greece",
        "<img src='assets/images/city-center-icon.svg' alt=''>Athens City Center - Greece",
        "<img src='assets/images/train-icon.svg' alt=''>Athens Train Station - Greece"
    ];

    var returnLocationInput = document.querySelector('#return_location');
    var returnList = document.querySelector('.return_list');
    var noActiveCross = document.querySelector('.return_location .noactive_cross');
    var activeCross = document.querySelector('.return_location .active_cross');

    // Show dropdowns and filter items on input
    returnLocationInput.addEventListener('input', function() {
        var query = returnLocationInput.value.toLowerCase();
        var filteredItems = items.filter(function(item) {
            return item.toLowerCase().includes(query);
        });

        if (filteredItems.length) {
            returnList.innerHTML = '';
            returnList.style.display = 'block';
            filteredItems.forEach(function(item) {
                var div = document.createElement('div');
                div.className = 'dropdowns-item return_item';
                div.innerHTML = item;
                returnList.appendChild(div);
            });
        } else {
            returnList.style.display = 'none';
        }
    });

    // When an item is clicked, update the input and hide dropdowns
    returnList.addEventListener('click', function(event) {
        if (event.target.classList.contains('return_item')) {
            returnLocationInput.value = event.target.textContent.trim();
            returnList.style.display = 'none';
        }
    });

    // When the input is clicked, show the cross and hide search icon
    returnLocationInput.addEventListener('click', function() {
        if (noActiveCross) {
            noActiveCross.style.display = 'block';
        }
        if (activeCross) {
            activeCross.style.display = 'none';
        }
    });

    // When the cross is clicked, empty the input
    if (noActiveCross) {
        noActiveCross.addEventListener('click', function() {
            returnLocationInput.value = "";
        });
    }

    // Hide dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!returnLocationInput.contains(e.target) && !returnList.contains(e.target)) {
            returnList.style.display = 'none';
            if (noActiveCross) {
                noActiveCross.style.display = 'none';
            }
            if (activeCross) {
                activeCross.style.display = 'block';
            }
        }
    });
});
}

// View funtion of Car Page
if (document.querySelector('#gridView')) {
document.addEventListener("DOMContentLoaded", function() {
    const gridViewTab = document.getElementById("gridView");
    const listViewTab = document.getElementById("listView");
    const gridView = document.querySelector(".cars_cards.grid_view");
    const listView = document.querySelector(".cars_cards.list_view");

    gridViewTab.addEventListener("click", function() {
        gridView.style.display = "flex"; // Show grid view
        listView.style.display = "none"; // Hide list view
        gridViewTab.classList.add("active"); // Optional: Add active class
        listViewTab.classList.remove("active"); // Optional: Remove active class
    });

    listViewTab.addEventListener("click", function() {
        gridView.style.display = "none"; // Hide grid view
        listView.style.display = "flex"; // Show list view
        listViewTab.classList.add("active"); // Optional: Add active class
        gridViewTab.classList.remove("active"); // Optional: Remove active class
    });
});
}

// Phone Input
if (document.querySelector('#phone')) {
    const input = document.querySelector("#phone");
    window.intlTelInput(input, {
        initialCountry: "us",
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@24.5.0/build/js/utils.js",
    });
}

// Phone Input
if (document.querySelector('#phone_number')) {
    const input = document.querySelector("#phone_number");
    window.intlTelInput(input, {
        initialCountry: "us",
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@24.5.0/build/js/utils.js",
    });
}


if (document.querySelector('.policy_tabs li')) {
    // Terms Page Tabs
    const tabs = document.querySelectorAll('.policy_tabs li');
    const contents = document.querySelectorAll('.tab-content');

    // Function to handle tab switching
    function switchTab(event) {
        // Remove active class from all tabs and contents
        tabs.forEach(tab => tab.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));
        
        // Add active class to the clicked tab
        event.target.classList.add('active');

        // Get the content ID to show
        const contentId = event.target.getAttribute('data-content');
        
        // Show the corresponding content
        const activeContent = document.getElementById(contentId);
        if (activeContent) {
            activeContent.classList.add('active');
        }
    }
    // Attach click event listeners to tabs
    tabs.forEach(tab => {
        tab.addEventListener('click', switchTab);
    });
    }

    if (document.querySelector('.payment_methods li')) {
    // Payment Methods select on Step-3 page
    const paymentOptions = document.querySelectorAll('.payment_methods li');

    // Function to handle the active class toggle
    function toggleActiveClass(event) {
        // Remove 'active' class from all <li> elements
        paymentOptions.forEach(option => option.classList.remove('active'));

        // Add 'active' class to the clicked <li> element
        event.currentTarget.classList.add('active');
    }

    // Attach click event listener to each <li>
    paymentOptions.forEach(option => {
        option.addEventListener('click', toggleActiveClass);
    });
}
if (document.querySelector('.post_list li')) {
    // Recent Blogs Sidebar on Single Post Page
    const posts = document.querySelectorAll('.post_list li');
    const seeMoreButton = document.querySelector('.see_more_button .red_solid_button');

    // Initially show only the first 4 items
    let isShowingAll = false;

    // Function to toggle between showing all items or just the first 4
    function toggleItems() {
        if (isShowingAll) {
            // Hide the last 4 items
            posts.forEach((post, index) => {
                if (index >= 4) {
                    post.classList.remove('visible');
                }
            });
            seeMoreButton.textContent = 'See More'; // Change button text to 'See More'
        } else {
            // Show all 8 items
            posts.forEach(post => post.classList.add('visible'));
            seeMoreButton.textContent = 'See Less'; // Change button text to 'See Less'
        }
        isShowingAll = !isShowingAll; // Toggle the state
    }

    // Add click event listener to "See More" button
    seeMoreButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        toggleItems();
    });
}

// Blue Footer Tabs
if (document.querySelector('.footer.blue .footer_tabs li')) {
    // Select all list items in footer_tabs
    const footerItems = document.querySelectorAll('.footer.blue .footer_tabs li');

    // Select all bottom links containers
    const bottomLinks = document.querySelectorAll('.footer.blue .bottom_links');

    // Function to handle footer item clicks
    footerItems.forEach(item => {
        item.addEventListener('click', function () {
            // Remove 'active' class from all footer items
            footerItems.forEach(i => i.classList.remove('active'));

            // Add 'active' class to the clicked item
            this.classList.add('active');

            // Get the data-content attribute of the clicked item
            const contentName = this.getAttribute('data-content');

            // Hide all bottom_links divs
            bottomLinks.forEach(link => link.classList.remove('active'));

            // Show the bottom_links div related to the clicked item
            document.querySelector(`.footer.blue .bottom_links.${contentName}`).classList.add('active');
        });
    });
}

// Gray Footer Tabs
if (document.querySelector('.footer.gray .footer_tabs li')) {
    // Select all list items in footer_tabs
    const footerItems = document.querySelectorAll('.footer.gray .footer_tabs li');

    // Select all bottom links containers
    const bottomLinks = document.querySelectorAll('.footer.gray .bottom_links');

    // Function to handle footer item clicks
    footerItems.forEach(item => {
        item.addEventListener('click', function () {
            // Remove 'active' class from all footer items
            footerItems.forEach(i => i.classList.remove('active'));

            // Add 'active' class to the clicked item
            this.classList.add('active');

            // Get the data-content attribute of the clicked item
            const contentName = this.getAttribute('data-content');

            // Hide all bottom_links divs
            bottomLinks.forEach(link => link.classList.remove('active'));

            // Show the bottom_links div related to the clicked item
            document.querySelector(`.footer.gray .bottom_links.${contentName}`).classList.add('active');
        });
    });
}

// Red Footer Tabs
if (document.querySelector('.footer.red .footer_tabs li')) {
    // Select all list items in footer_tabs
    const footerItems = document.querySelectorAll('.footer.red .footer_tabs li');

    // Select all bottom links containers
    const bottomLinks = document.querySelectorAll('.footer.red .bottom_links');

    // Function to handle footer item clicks
    footerItems.forEach(item => {
        item.addEventListener('click', function () {
            // Remove 'active' class from all footer items
            footerItems.forEach(i => i.classList.remove('active'));

            // Add 'active' class to the clicked item
            this.classList.add('active');

            // Get the data-content attribute of the clicked item
            const contentName = this.getAttribute('data-content');

            // Hide all bottom_links divs
            bottomLinks.forEach(link => link.classList.remove('active'));

            // Show the bottom_links div related to the clicked item
            document.querySelector(`.footer.red .bottom_links.${contentName}`).classList.add('active');
        });
    });
}

// Black Footer Tabs
if (document.querySelector('.footer.black .footer_tabs li')) {
    // Select all list items in footer_tabs
    const footerItems = document.querySelectorAll('.footer.black .footer_tabs li');

    // Select all bottom links containers
    const bottomLinks = document.querySelectorAll('.footer.black .bottom_links');

    // Function to handle footer item clicks
    footerItems.forEach(item => {
        item.addEventListener('click', function () {
            // Remove 'active' class from all footer items
            footerItems.forEach(i => i.classList.remove('active'));

            // Add 'active' class to the clicked item
            this.classList.add('active');

            // Get the data-content attribute of the clicked item
            const contentName = this.getAttribute('data-content');

            // Hide all bottom_links divs
            bottomLinks.forEach(link => link.classList.remove('active'));

            // Show the bottom_links div related to the clicked item
            document.querySelector(`.footer.black .bottom_links.${contentName}`).classList.add('active');
        });
    });
}
// Compo 3 All Blog
if (document.querySelector('.checkout_blogs .all_blogs')) {
    // Select all buttons with the class 'all_blogs'
    const allBlogsButtons = document.querySelectorAll('.checkout_blogs .all_blogs');
    const allCards = document.querySelectorAll('.checkout_blogs .blog_card');

    // Initially hide all cards except the first 3
    allCards.forEach((card, index) => {
        if (index >= 3) {
            card.style.display = 'none'; // Hide all but the first three
        }
    });

    // Function to toggle visibility of blog cards
    function toggleBlogCards() {
        // Determine if all cards are currently shown
        const isShowingAll = Array.from(allCards).every(card => card.style.display === 'flex');

        // Toggle visibility of blog cards
        allCards.forEach((card, index) => {
            if (isShowingAll) {
                // If currently showing all, hide all except first 3
                if (index >= 3) {
                    card.style.display = 'none'; // Hide all but first three
                }
            } else {
                // If currently showing 3, show all
                card.style.display = 'flex'; // Show all
            }
        });

        // Change button text based on current state
        allBlogsButtons.forEach(button => {
            button.textContent = isShowingAll ? 'All Blogs' : 'See Less';
        });
    }

    // Attach click event listener to all buttons
    allBlogsButtons.forEach(button => {
        button.addEventListener('click', toggleBlogCards);
    });
}
if (document.querySelector('.category')) {
    // Select all category labels
    const categoryLabels = document.querySelectorAll('.category .check');
    // Select all modals
    const modals = document.querySelectorAll('.car_cards1 .carmodal');
    // Select the dropdown for mobile
    const categorySelect = document.getElementById('category-select');

    // Function to filter modals based on the selected category
    function filterModals(category) {
        modals.forEach(modal => {
            if (category === 'all' || modal.classList.contains(category)) {
                modal.style.display = 'flex'; // Show modal
            } else {
                modal.style.display = 'none'; // Hide modal
            }
        });
    }

    // Add click event listener to each category label
    categoryLabels.forEach(label => {
        label.addEventListener('click', function() {
            // Remove 'active' class from all labels and add to clicked one
            categoryLabels.forEach(lbl => lbl.classList.remove('active'));
            this.classList.add('active');

            // Get the selected category
            const selectedCategory = this.getAttribute('data-category');

            // Update the dropdown to reflect the selected category
            categorySelect.value = selectedCategory;

            // Filter the modals based on the selected category
            filterModals(selectedCategory);
        });
    });

    // Add change event listener to the dropdown
    categorySelect.addEventListener('change', function() {
        const selectedCategory = this.value;

        // Remove 'active' class from all labels
        categoryLabels.forEach(lbl => lbl.classList.remove('active'));

        // Set the corresponding label to active
        const activeLabel = document.querySelector(`.category .check[data-category="${selectedCategory}"]`);
        if (activeLabel) {
            activeLabel.classList.add('active');
        }

        // Filter the modals based on the selected category
        filterModals(selectedCategory);
    });

    // Initial display of all items
    filterModals('all');
}
if (document.querySelector('#select-box-1')) {
// 253 countries
const countries = [
    { name: "Afghanistan", code: "AF", phone: 93 },
    { name: "Aland Islands", code: "AX", phone: 358 },
    { name: "Albania", code: "AL", phone: 355 },
    { name: "Algeria", code: "DZ", phone: 213 },
    { name: "American Samoa", code: "AS", phone: 1684 },
    { name: "Andorra", code: "AD", phone: 376 },
    { name: "Angola", code: "AO", phone: 244 },
    { name: "Anguilla", code: "AI", phone: 1264 },
    { name: "Antarctica", code: "AQ", phone: 672 },
    { name: "Antigua and Barbuda", code: "AG", phone: 1268 },
    { name: "Argentina", code: "AR", phone: 54 },
    { name: "Armenia", code: "AM", phone: 374 },
    { name: "Aruba", code: "AW", phone: 297 },
    { name: "Australia", code: "AU", phone: 61 },
    { name: "Austria", code: "AT", phone: 43 },
    { name: "Azerbaijan", code: "AZ", phone: 994 },
    { name: "Bahamas", code: "BS", phone: 1242 },
    { name: "Bahrain", code: "BH", phone: 973 },
    { name: "Bangladesh", code: "BD", phone: 880 },
    { name: "Barbados", code: "BB", phone: 1246 },
    { name: "Belarus", code: "BY", phone: 375 },
    { name: "Belgium", code: "BE", phone: 32 },
    { name: "Belize", code: "BZ", phone: 501 },
    { name: "Benin", code: "BJ", phone: 229 },
    { name: "Bermuda", code: "BM", phone: 1441 },
    { name: "Bhutan", code: "BT", phone: 975 },
    { name: "Bolivia", code: "BO", phone: 591 },
    { name: "Bonaire, Sint Eustatius and Saba", code: "BQ", phone: 599 },
    { name: "Bosnia and Herzegovina", code: "BA", phone: 387 },
    { name: "Botswana", code: "BW", phone: 267 },
    { name: "Bouvet Island", code: "BV", phone: 55 },
    { name: "Brazil", code: "BR", phone: 55 },
    { name: "British Indian Ocean Territory", code: "IO", phone: 246 },
    { name: "Brunei Darussalam", code: "BN", phone: 673 },
    { name: "Bulgaria", code: "BG", phone: 359 },
    { name: "Burkina Faso", code: "BF", phone: 226 },
    { name: "Burundi", code: "BI", phone: 257 },
    { name: "Cambodia", code: "KH", phone: 855 },
    { name: "Cameroon", code: "CM", phone: 237 },
    { name: "Canada", code: "CA", phone: 1 },
    { name: "Cape Verde", code: "CV", phone: 238 },
    { name: "Cayman Islands", code: "KY", phone: 1345 },
    { name: "Central African Republic", code: "CF", phone: 236 },
    { name: "Chad", code: "TD", phone: 235 },
    { name: "Chile", code: "CL", phone: 56 },
    { name: "China", code: "CN", phone: 86 },
    { name: "Christmas Island", code: "CX", phone: 61 },
    { name: "Cocos (Keeling) Islands", code: "CC", phone: 672 },
    { name: "Colombia", code: "CO", phone: 57 },
    { name: "Comoros", code: "KM", phone: 269 },
    { name: "Congo", code: "CG", phone: 242 },
    { name: "Congo, Democratic Republic of the Congo", code: "CD", phone: 242 },
    { name: "Cook Islands", code: "CK", phone: 682 },
    { name: "Costa Rica", code: "CR", phone: 506 },
    { name: "Cote D'Ivoire", code: "CI", phone: 225 },
    { name: "Croatia", code: "HR", phone: 385 },
    { name: "Cuba", code: "CU", phone: 53 },
    { name: "Curacao", code: "CW", phone: 599 },
    { name: "Cyprus", code: "CY", phone: 357 },
    { name: "Czech Republic", code: "CZ", phone: 420 },
    { name: "Denmark", code: "DK", phone: 45 },
    { name: "Djibouti", code: "DJ", phone: 253 },
    { name: "Dominica", code: "DM", phone: 1767 },
    { name: "Dominican Republic", code: "DO", phone: 1809 },
    { name: "Ecuador", code: "EC", phone: 593 },
    { name: "Egypt", code: "EG", phone: 20 },
    { name: "El Salvador", code: "SV", phone: 503 },
    { name: "Equatorial Guinea", code: "GQ", phone: 240 },
    { name: "Eritrea", code: "ER", phone: 291 },
    { name: "Estonia", code: "EE", phone: 372 },
    { name: "Ethiopia", code: "ET", phone: 251 },
    { name: "Falkland Islands (Malvinas)", code: "FK", phone: 500 },
    { name: "Faroe Islands", code: "FO", phone: 298 },
    { name: "Fiji", code: "FJ", phone: 679 },
    { name: "Finland", code: "FI", phone: 358 },
    { name: "France", code: "FR", phone: 33 },
    { name: "French Guiana", code: "GF", phone: 594 },
    { name: "French Polynesia", code: "PF", phone: 689 },
    { name: "French Southern Territories", code: "TF", phone: 262 },
    { name: "Gabon", code: "GA", phone: 241 },
    { name: "Gambia", code: "GM", phone: 220 },
    { name: "Georgia", code: "GE", phone: 995 },
    { name: "Germany", code: "DE", phone: 49 },
    { name: "Ghana", code: "GH", phone: 233 },
    { name: "Gibraltar", code: "GI", phone: 350 },
    { name: "Greece", code: "GR", phone: 30 },
    { name: "Greenland", code: "GL", phone: 299 },
    { name: "Grenada", code: "GD", phone: 1473 },
    { name: "Guadeloupe", code: "GP", phone: 590 },
    { name: "Guam", code: "GU", phone: 1671 },
    { name: "Guatemala", code: "GT", phone: 502 },
    { name: "Guernsey", code: "GG", phone: 44 },
    { name: "Guinea", code: "GN", phone: 224 },
    { name: "Guinea-Bissau", code: "GW", phone: 245 },
    { name: "Guyana", code: "GY", phone: 592 },
    { name: "Haiti", code: "HT", phone: 509 },
    { name: "Heard Island and McDonald Islands", code: "HM", phone: 0 },
    { name: "Holy See (Vatican City State)", code: "VA", phone: 39 },
    { name: "Honduras", code: "HN", phone: 504 },
    { name: "Hong Kong", code: "HK", phone: 852 },
    { name: "Hungary", code: "HU", phone: 36 },
    { name: "Iceland", code: "IS", phone: 354 },
    { name: "India", code: "IN", phone: 91 },
    { name: "Indonesia", code: "ID", phone: 62 },
    { name: "Iran, Islamic Republic of", code: "IR", phone: 98 },
    { name: "Iraq", code: "IQ", phone: 964 },
    { name: "Ireland", code: "IE", phone: 353 },
    { name: "Isle of Man", code: "IM", phone: 44 },
    { name: "Israel", code: "IL", phone: 972 },
    { name: "Italy", code: "IT", phone: 39 },
    { name: "Jamaica", code: "JM", phone: 1876 },
    { name: "Japan", code: "JP", phone: 81 },
    { name: "Jersey", code: "JE", phone: 44 },
    { name: "Jordan", code: "JO", phone: 962 },
    { name: "Kazakhstan", code: "KZ", phone: 7 },
    { name: "Kenya", code: "KE", phone: 254 },
    { name: "Kiribati", code: "KI", phone: 686 },
    { name: "Korea, Democratic People's Republic of", code: "KP", phone: 850 },
    { name: "Korea, Republic of", code: "KR", phone: 82 },
    { name: "Kosovo", code: "XK", phone: 383 },
    { name: "Kuwait", code: "KW", phone: 965 },
    { name: "Kyrgyzstan", code: "KG", phone: 996 },
    { name: "Lao People's Democratic Republic", code: "LA", phone: 856 },
    { name: "Latvia", code: "LV", phone: 371 },
    { name: "Lebanon", code: "LB", phone: 961 },
    { name: "Lesotho", code: "LS", phone: 266 },
    { name: "Liberia", code: "LR", phone: 231 },
    { name: "Libyan Arab Jamahiriya", code: "LY", phone: 218 },
    { name: "Liechtenstein", code: "LI", phone: 423 },
    { name: "Lithuania", code: "LT", phone: 370 },
    { name: "Luxembourg", code: "LU", phone: 352 },
    { name: "Macao", code: "MO", phone: 853 },
    { name: "Macedonia, the Former Yugoslav Republic of", code: "MK", phone: 389 },
    { name: "Madagascar", code: "MG", phone: 261 },
    { name: "Malawi", code: "MW", phone: 265 },
    { name: "Malaysia", code: "MY", phone: 60 },
    { name: "Maldives", code: "MV", phone: 960 },
    { name: "Mali", code: "ML", phone: 223 },
    { name: "Malta", code: "MT", phone: 356 },
    { name: "Marshall Islands", code: "MH", phone: 692 },
    { name: "Martinique", code: "MQ", phone: 596 },
    { name: "Mauritania", code: "MR", phone: 222 },
    { name: "Mauritius", code: "MU", phone: 230 },
    { name: "Mayotte", code: "YT", phone: 262 },
    { name: "Mexico", code: "MX", phone: 52 },
    { name: "Micronesia, Federated States of", code: "FM", phone: 691 },
    { name: "Moldova, Republic of", code: "MD", phone: 373 },
    { name: "Monaco", code: "MC", phone: 377 },
    { name: "Mongolia", code: "MN", phone: 976 },
    { name: "Montenegro", code: "ME", phone: 382 },
    { name: "Montserrat", code: "MS", phone: 1664 },
    { name: "Morocco", code: "MA", phone: 212 },
    { name: "Mozambique", code: "MZ", phone: 258 },
    { name: "Myanmar", code: "MM", phone: 95 },
    { name: "Namibia", code: "NA", phone: 264 },
    { name: "Nauru", code: "NR", phone: 674 },
    { name: "Nepal", code: "NP", phone: 977 },
    { name: "Netherlands", code: "NL", phone: 31 },
    { name: "Netherlands Antilles", code: "AN", phone: 599 },
    { name: "New Caledonia", code: "NC", phone: 687 },
    { name: "New Zealand", code: "NZ", phone: 64 },
    { name: "Nicaragua", code: "NI", phone: 505 },
    { name: "Niger", code: "NE", phone: 227 },
    { name: "Nigeria", code: "NG", phone: 234 },
    { name: "Niue", code: "NU", phone: 683 },
    { name: "Norfolk Island", code: "NF", phone: 672 },
    { name: "Northern Mariana Islands", code: "MP", phone: 1670 },
    { name: "Norway", code: "NO", phone: 47 },
    { name: "Oman", code: "OM", phone: 968 },
    { name: "Pakistan", code: "PK", phone: 92 },
    { name: "Palau", code: "PW", phone: 680 },
    { name: "Palestinian Territory, Occupied", code: "PS", phone: 970 },
    { name: "Panama", code: "PA", phone: 507 },
    { name: "Papua New Guinea", code: "PG", phone: 675 },
    { name: "Paraguay", code: "PY", phone: 595 },
    { name: "Peru", code: "PE", phone: 51 },
    { name: "Philippines", code: "PH", phone: 63 },
    { name: "Pitcairn", code: "PN", phone: 64 },
    { name: "Poland", code: "PL", phone: 48 },
    { name: "Portugal", code: "PT", phone: 351 },
    { name: "Puerto Rico", code: "PR", phone: 1787 },
    { name: "Qatar", code: "QA", phone: 974 },
    { name: "Reunion", code: "RE", phone: 262 },
    { name: "Romania", code: "RO", phone: 40 },
    { name: "Russian Federation", code: "RU", phone: 7 },
    { name: "Rwanda", code: "RW", phone: 250 },
    { name: "Saint Barthelemy", code: "BL", phone: 590 },
    { name: "Saint Helena", code: "SH", phone: 290 },
    { name: "Saint Kitts and Nevis", code: "KN", phone: 1869 },
    { name: "Saint Lucia", code: "LC", phone: 1758 },
    { name: "Saint Martin", code: "MF", phone: 590 },
    { name: "Saint Pierre and Miquelon", code: "PM", phone: 508 },
    { name: "Saint Vincent and the Grenadines", code: "VC", phone: 1784 },
    { name: "Samoa", code: "WS", phone: 684 },
    { name: "San Marino", code: "SM", phone: 378 },
    { name: "Sao Tome and Principe", code: "ST", phone: 239 },
    { name: "Saudi Arabia", code: "SA", phone: 966 },
    { name: "Senegal", code: "SN", phone: 221 },
    { name: "Serbia", code: "RS", phone: 381 },
    { name: "Serbia and Montenegro", code: "CS", phone: 381 },
    { name: "Seychelles", code: "SC", phone: 248 },
    { name: "Sierra Leone", code: "SL", phone: 232 },
    { name: "Singapore", code: "SG", phone: 65 },
    { name: "St Martin", code: "SX", phone: 721 },
    { name: "Slovakia", code: "SK", phone: 421 },
    { name: "Slovenia", code: "SI", phone: 386 },
    { name: "Solomon Islands", code: "SB", phone: 677 },
    { name: "Somalia", code: "SO", phone: 252 },
    { name: "South Africa", code: "ZA", phone: 27 },
    { name: "South Georgia and the South Sandwich Islands", code: "GS", phone: 500 },
    { name: "South Sudan", code: "SS", phone: 211 },
    { name: "Spain", code: "ES", phone: 34 },
    { name: "Sri Lanka", code: "LK", phone: 94 },
    { name: "Sudan", code: "SD", phone: 249 },
    { name: "Suriname", code: "SR", phone: 597 },
    { name: "Svalbard and Jan Mayen", code: "SJ", phone: 47 },
    { name: "Swaziland", code: "SZ", phone: 268 },
    { name: "Sweden", code: "SE", phone: 46 },
    { name: "Switzerland", code: "CH", phone: 41 },
    { name: "Syrian Arab Republic", code: "SY", phone: 963 },
    { name: "Taiwan, Province of China", code: "TW", phone: 886 },
    { name: "Tajikistan", code: "TJ", phone: 992 },
    { name: "Tanzania, United Republic of", code: "TZ", phone: 255 },
    { name: "Thailand", code: "TH", phone: 66 },
    { name: "Timor-Leste", code: "TL", phone: 670 },
    { name: "Togo", code: "TG", phone: 228 },
    { name: "Tokelau", code: "TK", phone: 690 },
    { name: "Tonga", code: "TO", phone: 676 },
    { name: "Trinidad and Tobago", code: "TT", phone: 1868 },
    { name: "Tunisia", code: "TN", phone: 216 },
    { name: "Turkey", code: "TR", phone: 90 },
    { name: "Turkmenistan", code: "TM", phone: 7370 },
    { name: "Turks and Caicos Islands", code: "TC", phone: 1649 },
    { name: "Tuvalu", code: "TV", phone: 688 },
    { name: "Uganda", code: "UG", phone: 256 },
    { name: "Ukraine", code: "UA", phone: 380 },
    { name: "United Arab Emirates", code: "AE", phone: 971 },
    { name: "United Kingdom", code: "GB", phone: 44 },
    { name: "United States", code: "US", phone: 1 },
    { name: "United States Minor Outlying Islands", code: "UM", phone: 1 },
    { name: "Uruguay", code: "UY", phone: 598 },
    { name: "Uzbekistan", code: "UZ", phone: 998 },
    { name: "Vanuatu", code: "VU", phone: 678 },
    { name: "Venezuela", code: "VE", phone: 58 },
    { name: "Viet Nam", code: "VN", phone: 84 },
    { name: "Virgin Islands, British", code: "VG", phone: 1284 },
    { name: "Virgin Islands, U.s.", code: "VI", phone: 1340 },
    { name: "Wallis and Futuna", code: "WF", phone: 681 },
    { name: "Western Sahara", code: "EH", phone: 212 },
    { name: "Yemen", code: "YE", phone: 967 },
    { name: "Zambia", code: "ZM", phone: 260 },
    { name: "Zimbabwe", code: "ZW", phone: 263 }
];
function populateCountryList(listId) {
    const listElement = document.getElementById(listId).querySelector('ol');
    countries.forEach(country => {
        const li = document.createElement("li");
        // li.textContent = `${country.name}`;
        li.innerHTML = `<div> <div>
        <span class="iconify" data-icon="flag:${country.code.toLowerCase()}-4x3"></span>
        <span class="country-name">${country.name}</span>
    </div></div>`;
        li.onclick = function () {
            const selectedOption = this.closest('.select-box').querySelector('.selected-option');
            const flagElement = selectedOption.querySelector('.iconify');
            flagElement.setAttribute('data-icon', `flag:${country.code.toLowerCase()}-4x3`);
            // Set the phone number input value with the country code
            selectedOption.querySelector('input[type="tel"]').value = `${country.name} `;

            toggleOptions(listId); // Hide options after selection
        };
        listElement.appendChild(li);
    });

}

function filterCountries(input, listId) {
    const filter = input.value.toLowerCase();
    const listElement = document.getElementById(listId).querySelector('ol');
    const items = listElement.getElementsByTagName('li');
    for (let i = 0; i < items.length; i++) {
        const txtValue = items[i].textContent || items[i].innerText;
        items[i].style.display = txtValue.toLowerCase().indexOf(filter) > -1 ? "" : "none";
    }
}

function toggleOptions(listId) {
    const options = document.getElementById(listId);
    options.classList.toggle('active');

    selected_option = document.querySelector('#select-box-1 .selected-option div');
    selected_option.classList.toggle('active');

    selected_option = document.querySelector('#select-box-1 .selected-option');
    selected_option.classList.toggle('active');
}

// Populate country lists for both select boxes
populateCountryList('country-list-1');
}
if (document.querySelector('#select-box-2')) {
    // 253 countries
    const countries = [
        { name: "Afghanistan", code: "AF", phone: 93 },
        { name: "Aland Islands", code: "AX", phone: 358 },
        { name: "Albania", code: "AL", phone: 355 },
        { name: "Algeria", code: "DZ", phone: 213 },
        { name: "American Samoa", code: "AS", phone: 1684 },
        { name: "Andorra", code: "AD", phone: 376 },
        { name: "Angola", code: "AO", phone: 244 },
        { name: "Anguilla", code: "AI", phone: 1264 },
        { name: "Antarctica", code: "AQ", phone: 672 },
        { name: "Antigua and Barbuda", code: "AG", phone: 1268 },
        { name: "Argentina", code: "AR", phone: 54 },
        { name: "Armenia", code: "AM", phone: 374 },
        { name: "Aruba", code: "AW", phone: 297 },
        { name: "Australia", code: "AU", phone: 61 },
        { name: "Austria", code: "AT", phone: 43 },
        { name: "Azerbaijan", code: "AZ", phone: 994 },
        { name: "Bahamas", code: "BS", phone: 1242 },
        { name: "Bahrain", code: "BH", phone: 973 },
        { name: "Bangladesh", code: "BD", phone: 880 },
        { name: "Barbados", code: "BB", phone: 1246 },
        { name: "Belarus", code: "BY", phone: 375 },
        { name: "Belgium", code: "BE", phone: 32 },
        { name: "Belize", code: "BZ", phone: 501 },
        { name: "Benin", code: "BJ", phone: 229 },
        { name: "Bermuda", code: "BM", phone: 1441 },
        { name: "Bhutan", code: "BT", phone: 975 },
        { name: "Bolivia", code: "BO", phone: 591 },
        { name: "Bonaire, Sint Eustatius and Saba", code: "BQ", phone: 599 },
        { name: "Bosnia and Herzegovina", code: "BA", phone: 387 },
        { name: "Botswana", code: "BW", phone: 267 },
        { name: "Bouvet Island", code: "BV", phone: 55 },
        { name: "Brazil", code: "BR", phone: 55 },
        { name: "British Indian Ocean Territory", code: "IO", phone: 246 },
        { name: "Brunei Darussalam", code: "BN", phone: 673 },
        { name: "Bulgaria", code: "BG", phone: 359 },
        { name: "Burkina Faso", code: "BF", phone: 226 },
        { name: "Burundi", code: "BI", phone: 257 },
        { name: "Cambodia", code: "KH", phone: 855 },
        { name: "Cameroon", code: "CM", phone: 237 },
        { name: "Canada", code: "CA", phone: 1 },
        { name: "Cape Verde", code: "CV", phone: 238 },
        { name: "Cayman Islands", code: "KY", phone: 1345 },
        { name: "Central African Republic", code: "CF", phone: 236 },
        { name: "Chad", code: "TD", phone: 235 },
        { name: "Chile", code: "CL", phone: 56 },
        { name: "China", code: "CN", phone: 86 },
        { name: "Christmas Island", code: "CX", phone: 61 },
        { name: "Cocos (Keeling) Islands", code: "CC", phone: 672 },
        { name: "Colombia", code: "CO", phone: 57 },
        { name: "Comoros", code: "KM", phone: 269 },
        { name: "Congo", code: "CG", phone: 242 },
        { name: "Congo, Democratic Republic of the Congo", code: "CD", phone: 242 },
        { name: "Cook Islands", code: "CK", phone: 682 },
        { name: "Costa Rica", code: "CR", phone: 506 },
        { name: "Cote D'Ivoire", code: "CI", phone: 225 },
        { name: "Croatia", code: "HR", phone: 385 },
        { name: "Cuba", code: "CU", phone: 53 },
        { name: "Curacao", code: "CW", phone: 599 },
        { name: "Cyprus", code: "CY", phone: 357 },
        { name: "Czech Republic", code: "CZ", phone: 420 },
        { name: "Denmark", code: "DK", phone: 45 },
        { name: "Djibouti", code: "DJ", phone: 253 },
        { name: "Dominica", code: "DM", phone: 1767 },
        { name: "Dominican Republic", code: "DO", phone: 1809 },
        { name: "Ecuador", code: "EC", phone: 593 },
        { name: "Egypt", code: "EG", phone: 20 },
        { name: "El Salvador", code: "SV", phone: 503 },
        { name: "Equatorial Guinea", code: "GQ", phone: 240 },
        { name: "Eritrea", code: "ER", phone: 291 },
        { name: "Estonia", code: "EE", phone: 372 },
        { name: "Ethiopia", code: "ET", phone: 251 },
        { name: "Falkland Islands (Malvinas)", code: "FK", phone: 500 },
        { name: "Faroe Islands", code: "FO", phone: 298 },
        { name: "Fiji", code: "FJ", phone: 679 },
        { name: "Finland", code: "FI", phone: 358 },
        { name: "France", code: "FR", phone: 33 },
        { name: "French Guiana", code: "GF", phone: 594 },
        { name: "French Polynesia", code: "PF", phone: 689 },
        { name: "French Southern Territories", code: "TF", phone: 262 },
        { name: "Gabon", code: "GA", phone: 241 },
        { name: "Gambia", code: "GM", phone: 220 },
        { name: "Georgia", code: "GE", phone: 995 },
        { name: "Germany", code: "DE", phone: 49 },
        { name: "Ghana", code: "GH", phone: 233 },
        { name: "Gibraltar", code: "GI", phone: 350 },
        { name: "Greece", code: "GR", phone: 30 },
        { name: "Greenland", code: "GL", phone: 299 },
        { name: "Grenada", code: "GD", phone: 1473 },
        { name: "Guadeloupe", code: "GP", phone: 590 },
        { name: "Guam", code: "GU", phone: 1671 },
        { name: "Guatemala", code: "GT", phone: 502 },
        { name: "Guernsey", code: "GG", phone: 44 },
        { name: "Guinea", code: "GN", phone: 224 },
        { name: "Guinea-Bissau", code: "GW", phone: 245 },
        { name: "Guyana", code: "GY", phone: 592 },
        { name: "Haiti", code: "HT", phone: 509 },
        { name: "Heard Island and McDonald Islands", code: "HM", phone: 0 },
        { name: "Holy See (Vatican City State)", code: "VA", phone: 39 },
        { name: "Honduras", code: "HN", phone: 504 },
        { name: "Hong Kong", code: "HK", phone: 852 },
        { name: "Hungary", code: "HU", phone: 36 },
        { name: "Iceland", code: "IS", phone: 354 },
        { name: "India", code: "IN", phone: 91 },
        { name: "Indonesia", code: "ID", phone: 62 },
        { name: "Iran, Islamic Republic of", code: "IR", phone: 98 },
        { name: "Iraq", code: "IQ", phone: 964 },
        { name: "Ireland", code: "IE", phone: 353 },
        { name: "Isle of Man", code: "IM", phone: 44 },
        { name: "Israel", code: "IL", phone: 972 },
        { name: "Italy", code: "IT", phone: 39 },
        { name: "Jamaica", code: "JM", phone: 1876 },
        { name: "Japan", code: "JP", phone: 81 },
        { name: "Jersey", code: "JE", phone: 44 },
        { name: "Jordan", code: "JO", phone: 962 },
        { name: "Kazakhstan", code: "KZ", phone: 7 },
        { name: "Kenya", code: "KE", phone: 254 },
        { name: "Kiribati", code: "KI", phone: 686 },
        { name: "Korea, Democratic People's Republic of", code: "KP", phone: 850 },
        { name: "Korea, Republic of", code: "KR", phone: 82 },
        { name: "Kosovo", code: "XK", phone: 383 },
        { name: "Kuwait", code: "KW", phone: 965 },
        { name: "Kyrgyzstan", code: "KG", phone: 996 },
        { name: "Lao People's Democratic Republic", code: "LA", phone: 856 },
        { name: "Latvia", code: "LV", phone: 371 },
        { name: "Lebanon", code: "LB", phone: 961 },
        { name: "Lesotho", code: "LS", phone: 266 },
        { name: "Liberia", code: "LR", phone: 231 },
        { name: "Libyan Arab Jamahiriya", code: "LY", phone: 218 },
        { name: "Liechtenstein", code: "LI", phone: 423 },
        { name: "Lithuania", code: "LT", phone: 370 },
        { name: "Luxembourg", code: "LU", phone: 352 },
        { name: "Macao", code: "MO", phone: 853 },
        { name: "Macedonia, the Former Yugoslav Republic of", code: "MK", phone: 389 },
        { name: "Madagascar", code: "MG", phone: 261 },
        { name: "Malawi", code: "MW", phone: 265 },
        { name: "Malaysia", code: "MY", phone: 60 },
        { name: "Maldives", code: "MV", phone: 960 },
        { name: "Mali", code: "ML", phone: 223 },
        { name: "Malta", code: "MT", phone: 356 },
        { name: "Marshall Islands", code: "MH", phone: 692 },
        { name: "Martinique", code: "MQ", phone: 596 },
        { name: "Mauritania", code: "MR", phone: 222 },
        { name: "Mauritius", code: "MU", phone: 230 },
        { name: "Mayotte", code: "YT", phone: 262 },
        { name: "Mexico", code: "MX", phone: 52 },
        { name: "Micronesia, Federated States of", code: "FM", phone: 691 },
        { name: "Moldova, Republic of", code: "MD", phone: 373 },
        { name: "Monaco", code: "MC", phone: 377 },
        { name: "Mongolia", code: "MN", phone: 976 },
        { name: "Montenegro", code: "ME", phone: 382 },
        { name: "Montserrat", code: "MS", phone: 1664 },
        { name: "Morocco", code: "MA", phone: 212 },
        { name: "Mozambique", code: "MZ", phone: 258 },
        { name: "Myanmar", code: "MM", phone: 95 },
        { name: "Namibia", code: "NA", phone: 264 },
        { name: "Nauru", code: "NR", phone: 674 },
        { name: "Nepal", code: "NP", phone: 977 },
        { name: "Netherlands", code: "NL", phone: 31 },
        { name: "Netherlands Antilles", code: "AN", phone: 599 },
        { name: "New Caledonia", code: "NC", phone: 687 },
        { name: "New Zealand", code: "NZ", phone: 64 },
        { name: "Nicaragua", code: "NI", phone: 505 },
        { name: "Niger", code: "NE", phone: 227 },
        { name: "Nigeria", code: "NG", phone: 234 },
        { name: "Niue", code: "NU", phone: 683 },
        { name: "Norfolk Island", code: "NF", phone: 672 },
        { name: "Northern Mariana Islands", code: "MP", phone: 1670 },
        { name: "Norway", code: "NO", phone: 47 },
        { name: "Oman", code: "OM", phone: 968 },
        { name: "Pakistan", code: "PK", phone: 92 },
        { name: "Palau", code: "PW", phone: 680 },
        { name: "Palestinian Territory, Occupied", code: "PS", phone: 970 },
        { name: "Panama", code: "PA", phone: 507 },
        { name: "Papua New Guinea", code: "PG", phone: 675 },
        { name: "Paraguay", code: "PY", phone: 595 },
        { name: "Peru", code: "PE", phone: 51 },
        { name: "Philippines", code: "PH", phone: 63 },
        { name: "Pitcairn", code: "PN", phone: 64 },
        { name: "Poland", code: "PL", phone: 48 },
        { name: "Portugal", code: "PT", phone: 351 },
        { name: "Puerto Rico", code: "PR", phone: 1787 },
        { name: "Qatar", code: "QA", phone: 974 },
        { name: "Reunion", code: "RE", phone: 262 },
        { name: "Romania", code: "RO", phone: 40 },
        { name: "Russian Federation", code: "RU", phone: 7 },
        { name: "Rwanda", code: "RW", phone: 250 },
        { name: "Saint Barthelemy", code: "BL", phone: 590 },
        { name: "Saint Helena", code: "SH", phone: 290 },
        { name: "Saint Kitts and Nevis", code: "KN", phone: 1869 },
        { name: "Saint Lucia", code: "LC", phone: 1758 },
        { name: "Saint Martin", code: "MF", phone: 590 },
        { name: "Saint Pierre and Miquelon", code: "PM", phone: 508 },
        { name: "Saint Vincent and the Grenadines", code: "VC", phone: 1784 },
        { name: "Samoa", code: "WS", phone: 684 },
        { name: "San Marino", code: "SM", phone: 378 },
        { name: "Sao Tome and Principe", code: "ST", phone: 239 },
        { name: "Saudi Arabia", code: "SA", phone: 966 },
        { name: "Senegal", code: "SN", phone: 221 },
        { name: "Serbia", code: "RS", phone: 381 },
        { name: "Serbia and Montenegro", code: "CS", phone: 381 },
        { name: "Seychelles", code: "SC", phone: 248 },
        { name: "Sierra Leone", code: "SL", phone: 232 },
        { name: "Singapore", code: "SG", phone: 65 },
        { name: "St Martin", code: "SX", phone: 721 },
        { name: "Slovakia", code: "SK", phone: 421 },
        { name: "Slovenia", code: "SI", phone: 386 },
        { name: "Solomon Islands", code: "SB", phone: 677 },
        { name: "Somalia", code: "SO", phone: 252 },
        { name: "South Africa", code: "ZA", phone: 27 },
        { name: "South Georgia and the South Sandwich Islands", code: "GS", phone: 500 },
        { name: "South Sudan", code: "SS", phone: 211 },
        { name: "Spain", code: "ES", phone: 34 },
        { name: "Sri Lanka", code: "LK", phone: 94 },
        { name: "Sudan", code: "SD", phone: 249 },
        { name: "Suriname", code: "SR", phone: 597 },
        { name: "Svalbard and Jan Mayen", code: "SJ", phone: 47 },
        { name: "Swaziland", code: "SZ", phone: 268 },
        { name: "Sweden", code: "SE", phone: 46 },
        { name: "Switzerland", code: "CH", phone: 41 },
        { name: "Syrian Arab Republic", code: "SY", phone: 963 },
        { name: "Taiwan, Province of China", code: "TW", phone: 886 },
        { name: "Tajikistan", code: "TJ", phone: 992 },
        { name: "Tanzania, United Republic of", code: "TZ", phone: 255 },
        { name: "Thailand", code: "TH", phone: 66 },
        { name: "Timor-Leste", code: "TL", phone: 670 },
        { name: "Togo", code: "TG", phone: 228 },
        { name: "Tokelau", code: "TK", phone: 690 },
        { name: "Tonga", code: "TO", phone: 676 },
        { name: "Trinidad and Tobago", code: "TT", phone: 1868 },
        { name: "Tunisia", code: "TN", phone: 216 },
        { name: "Turkey", code: "TR", phone: 90 },
        { name: "Turkmenistan", code: "TM", phone: 7370 },
        { name: "Turks and Caicos Islands", code: "TC", phone: 1649 },
        { name: "Tuvalu", code: "TV", phone: 688 },
        { name: "Uganda", code: "UG", phone: 256 },
        { name: "Ukraine", code: "UA", phone: 380 },
        { name: "United Arab Emirates", code: "AE", phone: 971 },
        { name: "United Kingdom", code: "GB", phone: 44 },
        { name: "United States", code: "US", phone: 1 },
        { name: "United States Minor Outlying Islands", code: "UM", phone: 1 },
        { name: "Uruguay", code: "UY", phone: 598 },
        { name: "Uzbekistan", code: "UZ", phone: 998 },
        { name: "Vanuatu", code: "VU", phone: 678 },
        { name: "Venezuela", code: "VE", phone: 58 },
        { name: "Viet Nam", code: "VN", phone: 84 },
        { name: "Virgin Islands, British", code: "VG", phone: 1284 },
        { name: "Virgin Islands, U.s.", code: "VI", phone: 1340 },
        { name: "Wallis and Futuna", code: "WF", phone: 681 },
        { name: "Western Sahara", code: "EH", phone: 212 },
        { name: "Yemen", code: "YE", phone: 967 },
        { name: "Zambia", code: "ZM", phone: 260 },
        { name: "Zimbabwe", code: "ZW", phone: 263 }
    ];
    function populateCountryList(listId) {
        const listElement = document.getElementById(listId).querySelector('ol');
        countries.forEach(country => {
            const li = document.createElement("li");
            // li.textContent = `${country.name}`;
            li.innerHTML = `<div> <div>
            <span class="iconify" data-icon="flag:${country.code.toLowerCase()}-4x3"></span>
            <span class="country-name">${country.name}</span>
        </div></div>`;
            li.onclick = function () {
                const selectedOption = this.closest('.select-box').querySelector('.selected-option');
                const flagElement = selectedOption.querySelector('.iconify');
                flagElement.setAttribute('data-icon', `flag:${country.code.toLowerCase()}-4x3`);
                // Set the phone number input value with the country code
                selectedOption.querySelector('input[type="tel"]').value = `${country.name} `;
    
                toggleOptions(listId); // Hide options after selection
            };
            listElement.appendChild(li);
        });
    
    }
    
    function filterCountries(input, listId) {
        const filter = input.value.toLowerCase();
        const listElement = document.getElementById(listId).querySelector('ol');
        const items = listElement.getElementsByTagName('li');
        for (let i = 0; i < items.length; i++) {
            const txtValue = items[i].textContent || items[i].innerText;
            items[i].style.display = txtValue.toLowerCase().indexOf(filter) > -1 ? "" : "none";
        }
    }
    
    function toggleOptions(listId) {
        const options = document.getElementById(listId);
        options.classList.toggle('active');
    }
    
    // Populate country lists for both select boxes
    populateCountryList('country-list-2');
}
if (document.querySelector('#select-box-3')) {
    document.getElementById('select-box-3').addEventListener('click', function() {
        this.classList.toggle('actives');
    });
}
if (document.querySelector('#select-box-2')) {
    document.getElementById('select-box-2').addEventListener('click', function() {
        this.classList.toggle('actives');
    });
}
if (document.querySelector('#select-box-1')) {
    document.getElementById('select-box-1').addEventListener('click', function() {
        this.classList.toggle('actives');
    });
}
if (document.querySelector('#select-box-4')) {
    document.getElementById('select-box-4').addEventListener('click', function() {
        this.classList.toggle('actives');
    });
}
if (document.querySelector('#select-box-3')) {
    // 253 countries
    const countries = [
        { name: "Afghanistan", code: "AF", phone: 93 },
        { name: "Aland Islands", code: "AX", phone: 358 },
        { name: "Albania", code: "AL", phone: 355 },
        { name: "Algeria", code: "DZ", phone: 213 },
        { name: "American Samoa", code: "AS", phone: 1684 },
        { name: "Andorra", code: "AD", phone: 376 },
        { name: "Angola", code: "AO", phone: 244 },
        { name: "Anguilla", code: "AI", phone: 1264 },
        { name: "Antarctica", code: "AQ", phone: 672 },
        { name: "Antigua and Barbuda", code: "AG", phone: 1268 },
        { name: "Argentina", code: "AR", phone: 54 },
        { name: "Armenia", code: "AM", phone: 374 },
        { name: "Aruba", code: "AW", phone: 297 },
        { name: "Australia", code: "AU", phone: 61 },
        { name: "Austria", code: "AT", phone: 43 },
        { name: "Azerbaijan", code: "AZ", phone: 994 },
        { name: "Bahamas", code: "BS", phone: 1242 },
        { name: "Bahrain", code: "BH", phone: 973 },
        { name: "Bangladesh", code: "BD", phone: 880 },
        { name: "Barbados", code: "BB", phone: 1246 },
        { name: "Belarus", code: "BY", phone: 375 },
        { name: "Belgium", code: "BE", phone: 32 },
        { name: "Belize", code: "BZ", phone: 501 },
        { name: "Benin", code: "BJ", phone: 229 },
        { name: "Bermuda", code: "BM", phone: 1441 },
        { name: "Bhutan", code: "BT", phone: 975 },
        { name: "Bolivia", code: "BO", phone: 591 },
        { name: "Bonaire, Sint Eustatius and Saba", code: "BQ", phone: 599 },
        { name: "Bosnia and Herzegovina", code: "BA", phone: 387 },
        { name: "Botswana", code: "BW", phone: 267 },
        { name: "Bouvet Island", code: "BV", phone: 55 },
        { name: "Brazil", code: "BR", phone: 55 },
        { name: "British Indian Ocean Territory", code: "IO", phone: 246 },
        { name: "Brunei Darussalam", code: "BN", phone: 673 },
        { name: "Bulgaria", code: "BG", phone: 359 },
        { name: "Burkina Faso", code: "BF", phone: 226 },
        { name: "Burundi", code: "BI", phone: 257 },
        { name: "Cambodia", code: "KH", phone: 855 },
        { name: "Cameroon", code: "CM", phone: 237 },
        { name: "Canada", code: "CA", phone: 1 },
        { name: "Cape Verde", code: "CV", phone: 238 },
        { name: "Cayman Islands", code: "KY", phone: 1345 },
        { name: "Central African Republic", code: "CF", phone: 236 },
        { name: "Chad", code: "TD", phone: 235 },
        { name: "Chile", code: "CL", phone: 56 },
        { name: "China", code: "CN", phone: 86 },
        { name: "Christmas Island", code: "CX", phone: 61 },
        { name: "Cocos (Keeling) Islands", code: "CC", phone: 672 },
        { name: "Colombia", code: "CO", phone: 57 },
        { name: "Comoros", code: "KM", phone: 269 },
        { name: "Congo", code: "CG", phone: 242 },
        { name: "Congo, Democratic Republic of the Congo", code: "CD", phone: 242 },
        { name: "Cook Islands", code: "CK", phone: 682 },
        { name: "Costa Rica", code: "CR", phone: 506 },
        { name: "Cote D'Ivoire", code: "CI", phone: 225 },
        { name: "Croatia", code: "HR", phone: 385 },
        { name: "Cuba", code: "CU", phone: 53 },
        { name: "Curacao", code: "CW", phone: 599 },
        { name: "Cyprus", code: "CY", phone: 357 },
        { name: "Czech Republic", code: "CZ", phone: 420 },
        { name: "Denmark", code: "DK", phone: 45 },
        { name: "Djibouti", code: "DJ", phone: 253 },
        { name: "Dominica", code: "DM", phone: 1767 },
        { name: "Dominican Republic", code: "DO", phone: 1809 },
        { name: "Ecuador", code: "EC", phone: 593 },
        { name: "Egypt", code: "EG", phone: 20 },
        { name: "El Salvador", code: "SV", phone: 503 },
        { name: "Equatorial Guinea", code: "GQ", phone: 240 },
        { name: "Eritrea", code: "ER", phone: 291 },
        { name: "Estonia", code: "EE", phone: 372 },
        { name: "Ethiopia", code: "ET", phone: 251 },
        { name: "Falkland Islands (Malvinas)", code: "FK", phone: 500 },
        { name: "Faroe Islands", code: "FO", phone: 298 },
        { name: "Fiji", code: "FJ", phone: 679 },
        { name: "Finland", code: "FI", phone: 358 },
        { name: "France", code: "FR", phone: 33 },
        { name: "French Guiana", code: "GF", phone: 594 },
        { name: "French Polynesia", code: "PF", phone: 689 },
        { name: "French Southern Territories", code: "TF", phone: 262 },
        { name: "Gabon", code: "GA", phone: 241 },
        { name: "Gambia", code: "GM", phone: 220 },
        { name: "Georgia", code: "GE", phone: 995 },
        { name: "Germany", code: "DE", phone: 49 },
        { name: "Ghana", code: "GH", phone: 233 },
        { name: "Gibraltar", code: "GI", phone: 350 },
        { name: "Greece", code: "GR", phone: 30 },
        { name: "Greenland", code: "GL", phone: 299 },
        { name: "Grenada", code: "GD", phone: 1473 },
        { name: "Guadeloupe", code: "GP", phone: 590 },
        { name: "Guam", code: "GU", phone: 1671 },
        { name: "Guatemala", code: "GT", phone: 502 },
        { name: "Guernsey", code: "GG", phone: 44 },
        { name: "Guinea", code: "GN", phone: 224 },
        { name: "Guinea-Bissau", code: "GW", phone: 245 },
        { name: "Guyana", code: "GY", phone: 592 },
        { name: "Haiti", code: "HT", phone: 509 },
        { name: "Heard Island and McDonald Islands", code: "HM", phone: 0 },
        { name: "Holy See (Vatican City State)", code: "VA", phone: 39 },
        { name: "Honduras", code: "HN", phone: 504 },
        { name: "Hong Kong", code: "HK", phone: 852 },
        { name: "Hungary", code: "HU", phone: 36 },
        { name: "Iceland", code: "IS", phone: 354 },
        { name: "India", code: "IN", phone: 91 },
        { name: "Indonesia", code: "ID", phone: 62 },
        { name: "Iran, Islamic Republic of", code: "IR", phone: 98 },
        { name: "Iraq", code: "IQ", phone: 964 },
        { name: "Ireland", code: "IE", phone: 353 },
        { name: "Isle of Man", code: "IM", phone: 44 },
        { name: "Israel", code: "IL", phone: 972 },
        { name: "Italy", code: "IT", phone: 39 },
        { name: "Jamaica", code: "JM", phone: 1876 },
        { name: "Japan", code: "JP", phone: 81 },
        { name: "Jersey", code: "JE", phone: 44 },
        { name: "Jordan", code: "JO", phone: 962 },
        { name: "Kazakhstan", code: "KZ", phone: 7 },
        { name: "Kenya", code: "KE", phone: 254 },
        { name: "Kiribati", code: "KI", phone: 686 },
        { name: "Korea, Democratic People's Republic of", code: "KP", phone: 850 },
        { name: "Korea, Republic of", code: "KR", phone: 82 },
        { name: "Kosovo", code: "XK", phone: 383 },
        { name: "Kuwait", code: "KW", phone: 965 },
        { name: "Kyrgyzstan", code: "KG", phone: 996 },
        { name: "Lao People's Democratic Republic", code: "LA", phone: 856 },
        { name: "Latvia", code: "LV", phone: 371 },
        { name: "Lebanon", code: "LB", phone: 961 },
        { name: "Lesotho", code: "LS", phone: 266 },
        { name: "Liberia", code: "LR", phone: 231 },
        { name: "Libyan Arab Jamahiriya", code: "LY", phone: 218 },
        { name: "Liechtenstein", code: "LI", phone: 423 },
        { name: "Lithuania", code: "LT", phone: 370 },
        { name: "Luxembourg", code: "LU", phone: 352 },
        { name: "Macao", code: "MO", phone: 853 },
        { name: "Macedonia, the Former Yugoslav Republic of", code: "MK", phone: 389 },
        { name: "Madagascar", code: "MG", phone: 261 },
        { name: "Malawi", code: "MW", phone: 265 },
        { name: "Malaysia", code: "MY", phone: 60 },
        { name: "Maldives", code: "MV", phone: 960 },
        { name: "Mali", code: "ML", phone: 223 },
        { name: "Malta", code: "MT", phone: 356 },
        { name: "Marshall Islands", code: "MH", phone: 692 },
        { name: "Martinique", code: "MQ", phone: 596 },
        { name: "Mauritania", code: "MR", phone: 222 },
        { name: "Mauritius", code: "MU", phone: 230 },
        { name: "Mayotte", code: "YT", phone: 262 },
        { name: "Mexico", code: "MX", phone: 52 },
        { name: "Micronesia, Federated States of", code: "FM", phone: 691 },
        { name: "Moldova, Republic of", code: "MD", phone: 373 },
        { name: "Monaco", code: "MC", phone: 377 },
        { name: "Mongolia", code: "MN", phone: 976 },
        { name: "Montenegro", code: "ME", phone: 382 },
        { name: "Montserrat", code: "MS", phone: 1664 },
        { name: "Morocco", code: "MA", phone: 212 },
        { name: "Mozambique", code: "MZ", phone: 258 },
        { name: "Myanmar", code: "MM", phone: 95 },
        { name: "Namibia", code: "NA", phone: 264 },
        { name: "Nauru", code: "NR", phone: 674 },
        { name: "Nepal", code: "NP", phone: 977 },
        { name: "Netherlands", code: "NL", phone: 31 },
        { name: "Netherlands Antilles", code: "AN", phone: 599 },
        { name: "New Caledonia", code: "NC", phone: 687 },
        { name: "New Zealand", code: "NZ", phone: 64 },
        { name: "Nicaragua", code: "NI", phone: 505 },
        { name: "Niger", code: "NE", phone: 227 },
        { name: "Nigeria", code: "NG", phone: 234 },
        { name: "Niue", code: "NU", phone: 683 },
        { name: "Norfolk Island", code: "NF", phone: 672 },
        { name: "Northern Mariana Islands", code: "MP", phone: 1670 },
        { name: "Norway", code: "NO", phone: 47 },
        { name: "Oman", code: "OM", phone: 968 },
        { name: "Pakistan", code: "PK", phone: 92 },
        { name: "Palau", code: "PW", phone: 680 },
        { name: "Palestinian Territory, Occupied", code: "PS", phone: 970 },
        { name: "Panama", code: "PA", phone: 507 },
        { name: "Papua New Guinea", code: "PG", phone: 675 },
        { name: "Paraguay", code: "PY", phone: 595 },
        { name: "Peru", code: "PE", phone: 51 },
        { name: "Philippines", code: "PH", phone: 63 },
        { name: "Pitcairn", code: "PN", phone: 64 },
        { name: "Poland", code: "PL", phone: 48 },
        { name: "Portugal", code: "PT", phone: 351 },
        { name: "Puerto Rico", code: "PR", phone: 1787 },
        { name: "Qatar", code: "QA", phone: 974 },
        { name: "Reunion", code: "RE", phone: 262 },
        { name: "Romania", code: "RO", phone: 40 },
        { name: "Russian Federation", code: "RU", phone: 7 },
        { name: "Rwanda", code: "RW", phone: 250 },
        { name: "Saint Barthelemy", code: "BL", phone: 590 },
        { name: "Saint Helena", code: "SH", phone: 290 },
        { name: "Saint Kitts and Nevis", code: "KN", phone: 1869 },
        { name: "Saint Lucia", code: "LC", phone: 1758 },
        { name: "Saint Martin", code: "MF", phone: 590 },
        { name: "Saint Pierre and Miquelon", code: "PM", phone: 508 },
        { name: "Saint Vincent and the Grenadines", code: "VC", phone: 1784 },
        { name: "Samoa", code: "WS", phone: 684 },
        { name: "San Marino", code: "SM", phone: 378 },
        { name: "Sao Tome and Principe", code: "ST", phone: 239 },
        { name: "Saudi Arabia", code: "SA", phone: 966 },
        { name: "Senegal", code: "SN", phone: 221 },
        { name: "Serbia", code: "RS", phone: 381 },
        { name: "Serbia and Montenegro", code: "CS", phone: 381 },
        { name: "Seychelles", code: "SC", phone: 248 },
        { name: "Sierra Leone", code: "SL", phone: 232 },
        { name: "Singapore", code: "SG", phone: 65 },
        { name: "St Martin", code: "SX", phone: 721 },
        { name: "Slovakia", code: "SK", phone: 421 },
        { name: "Slovenia", code: "SI", phone: 386 },
        { name: "Solomon Islands", code: "SB", phone: 677 },
        { name: "Somalia", code: "SO", phone: 252 },
        { name: "South Africa", code: "ZA", phone: 27 },
        { name: "South Georgia and the South Sandwich Islands", code: "GS", phone: 500 },
        { name: "South Sudan", code: "SS", phone: 211 },
        { name: "Spain", code: "ES", phone: 34 },
        { name: "Sri Lanka", code: "LK", phone: 94 },
        { name: "Sudan", code: "SD", phone: 249 },
        { name: "Suriname", code: "SR", phone: 597 },
        { name: "Svalbard and Jan Mayen", code: "SJ", phone: 47 },
        { name: "Swaziland", code: "SZ", phone: 268 },
        { name: "Sweden", code: "SE", phone: 46 },
        { name: "Switzerland", code: "CH", phone: 41 },
        { name: "Syrian Arab Republic", code: "SY", phone: 963 },
        { name: "Taiwan, Province of China", code: "TW", phone: 886 },
        { name: "Tajikistan", code: "TJ", phone: 992 },
        { name: "Tanzania, United Republic of", code: "TZ", phone: 255 },
        { name: "Thailand", code: "TH", phone: 66 },
        { name: "Timor-Leste", code: "TL", phone: 670 },
        { name: "Togo", code: "TG", phone: 228 },
        { name: "Tokelau", code: "TK", phone: 690 },
        { name: "Tonga", code: "TO", phone: 676 },
        { name: "Trinidad and Tobago", code: "TT", phone: 1868 },
        { name: "Tunisia", code: "TN", phone: 216 },
        { name: "Turkey", code: "TR", phone: 90 },
        { name: "Turkmenistan", code: "TM", phone: 7370 },
        { name: "Turks and Caicos Islands", code: "TC", phone: 1649 },
        { name: "Tuvalu", code: "TV", phone: 688 },
        { name: "Uganda", code: "UG", phone: 256 },
        { name: "Ukraine", code: "UA", phone: 380 },
        { name: "United Arab Emirates", code: "AE", phone: 971 },
        { name: "United Kingdom", code: "GB", phone: 44 },
        { name: "United States", code: "US", phone: 1 },
        { name: "United States Minor Outlying Islands", code: "UM", phone: 1 },
        { name: "Uruguay", code: "UY", phone: 598 },
        { name: "Uzbekistan", code: "UZ", phone: 998 },
        { name: "Vanuatu", code: "VU", phone: 678 },
        { name: "Venezuela", code: "VE", phone: 58 },
        { name: "Viet Nam", code: "VN", phone: 84 },
        { name: "Virgin Islands, British", code: "VG", phone: 1284 },
        { name: "Virgin Islands, U.s.", code: "VI", phone: 1340 },
        { name: "Wallis and Futuna", code: "WF", phone: 681 },
        { name: "Western Sahara", code: "EH", phone: 212 },
        { name: "Yemen", code: "YE", phone: 967 },
        { name: "Zambia", code: "ZM", phone: 260 },
        { name: "Zimbabwe", code: "ZW", phone: 263 }
    ];
    function populateCountryList(listId) {
        const listElement = document.getElementById(listId).querySelector('ol');
        countries.forEach(country => {
            const li = document.createElement("li");
            // li.textContent = `${country.name}`;
            li.innerHTML = `<div> <div>
            <span class="iconify" data-icon="flag:${country.code.toLowerCase()}-4x3"></span>
            <span class="country-name">${country.name}</span>
        </div></div>`;
            li.onclick = function () {
                const selectedOption = this.closest('.select-box').querySelector('.selected-option');
                const flagElement = selectedOption.querySelector('.iconify');
                flagElement.setAttribute('data-icon', `flag:${country.code.toLowerCase()}-4x3`);
                // Set the phone number input value with the country code
                selectedOption.querySelector('input[type="tel"]').value = `${country.name} `;
    
                toggleOptions(listId); // Hide options after selection
            };
            listElement.appendChild(li);
        });
    
    }
    
    function filterCountries(input, listId) {
        const filter = input.value.toLowerCase();
        const listElement = document.getElementById(listId).querySelector('ol');
        const items = listElement.getElementsByTagName('li');
        for (let i = 0; i < items.length; i++) {
            const txtValue = items[i].textContent || items[i].innerText;
            items[i].style.display = txtValue.toLowerCase().indexOf(filter) > -1 ? "" : "none";
        }
    }
    
    function toggleOptions(listId) {
        const options = document.getElementById(listId);
        options.classList.toggle('active');

        selected_option = document.querySelector('#select-box-3 .selected-option div');
        selected_option.classList.toggle('active');

        selected_option = document.querySelector('#select-box-3 .selected-option');
        selected_option.classList.toggle('active');
    }
    
    // Populate country lists for both select boxes
    populateCountryList('country-list-3');
}

if (document.querySelector('.custom-dropdown')){
window.addEventListener('mouseup', function (event) {
    var pol = document.getElementById('countryDropdown');
    if (event.target != pol && event.target.parentNode != pol) {
        pol.style.display = 'none';
    }
});

var config = {
    cUrl: 'https://api.countrystatecity.in/v1/countries',
    ckey: 'NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA=='
}

var countrySelect = document.querySelector('.dropdown-btn'),
    stateSelect = document.querySelector('.state'),
    citySelect = document.querySelector('.city');

var countriesData = []; // Array to hold country data

function loadCountries() {
    let apiEndPoint = config.cUrl;

    fetch(apiEndPoint, { headers: { "X-CSCAPI-KEY": config.ckey } })
        .then(response => response.json())
        .then(data => {
            countriesData = data; // Store country data
            const countryDropdown = document.getElementById('countryDropdown');
            countriesData.forEach(country => {
                const optionDiv = document.createElement('div');
                const flagUrl = `https://flagcdn.com/16x12/${country.iso2.toLowerCase()}.png`;
                optionDiv.innerHTML = `<img src="${flagUrl}" alt="flag" /> ${country.name}`;
                optionDiv.setAttribute('data-value', country.iso2);
                optionDiv.onclick = function () {
                    countrySelect.setAttribute('data-value', country.iso2);
                    countrySelect.querySelector('span').textContent = country.name; // Set the selected country name
                    document.getElementById('selectedFlag').src = flagUrl; // Set the selected flag
                    document.getElementById('selectedFlag').style.display = 'block'; // Show the selected flag
                    loadStates(country.iso2);
                    closeDropdown('countryDropdown');
                };

                countryDropdown.appendChild(optionDiv);
            });
        })
        .catch(error => console.error('Error loading countries:', error));

    stateSelect.disabled = true;
    citySelect.disabled = true;
    stateSelect.style.pointerEvents = 'none';
    citySelect.style.pointerEvents = 'none';
}

function filterCountries() {
    const searchInput = document.querySelector('.search-input').value.toLowerCase();
    const countryDropdown = document.getElementById('countryDropdown');

    // Clear previous country options
    countryDropdown.querySelectorAll('div:not(.search-input)').forEach(div => div.remove());

    // Filter and display countries
    countriesData.forEach(country => {
        if (country.name.toLowerCase().includes(searchInput)) {
            const optionDiv = document.createElement('div');
            const flagUrl = `https://flagcdn.com/16x12/${country.iso2.toLowerCase()}.png`;
            optionDiv.innerHTML = `<img src="${flagUrl}" alt="flag" /> ${country.name}`;
            optionDiv.setAttribute('data-value', country.iso2);
            optionDiv.onclick = function () {
                countrySelect.setAttribute('data-value', country.iso2);
                countrySelect.querySelector('span').textContent = country.name; // Set the selected country name
                document.getElementById('selectedFlag').src = flagUrl; // Set the selected flag
                document.getElementById('selectedFlag').style.display = 'block'; // Show the selected flag
                loadStates(country.iso2);
                closeDropdown('countryDropdown');
            };

            countryDropdown.appendChild(optionDiv);
        }
    });
}

function loadStates(countryCode) {
    stateSelect.disabled = false;
    citySelect.disabled = true;
    stateSelect.style.pointerEvents = 'auto';
    citySelect.style.pointerEvents = 'none';

    stateSelect.innerHTML = '<option value="">Select State</option>'; // Clear existing states
    citySelect.innerHTML = '<option value="">Select City</option>'; // Clear existing city options

    fetch(`${config.cUrl}/${countryCode}/states`, { headers: { "X-CSCAPI-KEY": config.ckey } })
        .then(response => response.json())
        .then(data => {
            data.forEach(state => {
                const option = document.createElement('option');
                option.value = state.iso2;
                option.textContent = state.name;
                stateSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error loading states:', error));
}

function loadCities() {
    const selectedCountryCode = countrySelect.getAttribute('data-value');  // Get the selected country value
    const selectedStateCode = stateSelect.value;  // Get the selected state value

    if (!selectedCountryCode || !selectedStateCode) {
        console.error("Country or state not selected.");
        return;
    }

    citySelect.disabled = false;
    citySelect.style.pointerEvents = 'auto';
    citySelect.innerHTML = '<option value="">Select City</option>'; // Clear existing city options

    fetch(`${config.cUrl}/${selectedCountryCode}/states/${selectedStateCode}/cities`, { headers: { "X-CSCAPI-KEY": config.ckey } })
        .then(response => response.json())
        .then(data => {
            data.forEach(city => {
                const option = document.createElement('option');
                option.value = city.iso2;
                option.textContent = city.name;
                citySelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error loading cities:', error));
}

function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function closeDropdown(id) {
    document.getElementById(id).style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
    loadCountries();

    // Close dropdowns when clicking outside
    document.body.addEventListener("click", function (event) {
        const countryDropdown = document.getElementById('countryDropdown');
        if (countryDropdown.style.display === 'block' && !countryDropdown.contains(event.target) && !event.target.matches('.dropdown-btn')) {
            closeDropdown('countryDropdown');
        }
    });
});
}