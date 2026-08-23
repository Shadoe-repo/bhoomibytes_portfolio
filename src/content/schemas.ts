import { z } from 'zod';
export const schemas = {
  pages: {
    demo: z.object({
      "hero": z.object({
        "title": z.string(),
        "badge": z.string(),
        "description": z.string()
      }),
      "footer": z.object({
        "note": z.string()
      }),
      "meta": z.object({
        "title": z.string(),
        "description": z.string()
      })
    }),
    team: z.object({
      "meta": z.object({
        "title": z.string(),
        "description": z.string()
      }),
      "hero": z.object({
        "eyebrow": z.string(),
        "title": z.string(),
        "subtitle": z.string()
      }),
      "origin": z.object({
        "eyebrow": z.string(),
        "title": z.string(),
        "paragraphs": z.array(z.string())
      }),
      "team": z.object({
        "eyebrow": z.string(),
        "title": z.string(),
        "intro": z.string(),
        "members": z.array(z.object({
          "id": z.string(),
          "name": z.string(),
          "role": z.string(),
          "focus": z.string(),
          "bio": z.string(),
          "skills": z.array(z.string())
        }))
      }),
      "values": z.object({
        "eyebrow": z.string(),
        "title": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "icon": z.string(),
          "title": z.string(),
          "desc": z.string()
        }))
      }),
      "bhabnaju": z.object({
        "eyebrow": z.string(),
        "title": z.string(),
        "intro": z.string(),
        "what": z.object({
          "label": z.string(),
          "desc": z.string()
        }),
        "category": z.string(),
        "institution": z.string(),
        "timeline": z.array(z.object({
          "id": z.string(),
          "phase": z.string(),
          "desc": z.string()
        })),
        "quote": z.string()
      }),
      "cta": z.object({
        "title": z.string(),
        "subtitle": z.string(),
        "buttonLabel": z.string(),
        "buttonHref": z.string()
      })
    }),
    contact: z.object({
      "meta": z.object({
        "title": z.string(),
        "description": z.string()
      }),
      "hero": z.object({
        "eyebrow": z.string(),
        "title": z.string(),
        "subtitle": z.string()
      }),
      "form": z.object({
        "title": z.string(),
        "subtitle": z.string(),
        "inquiryTypes": z.array(z.string()),
        "successTitle": z.string(),
        "successBody": z.string(),
        "submitLabel": z.string()
      }),
      "pitchDeck": z.object({
        "eyebrow": z.string(),
        "title": z.string(),
        "subtitle": z.string(),
        "buttonLabel": z.string(),
        "note": z.string()
      }),
      "contact": z.object({
        "eyebrow": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "icon": z.string(),
          "label": z.string(),
          "value": z.string(),
          "href": z.string().nullable()
        }))
      }),
      "reasons": z.object({
        "title": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "icon": z.string(),
          "title": z.string(),
          "desc": z.string()
        }))
      })
    }),
    tech: z.object({
      "meta": z.object({
        "title": z.string(),
        "description": z.string()
      }),
      "hero": z.object({
        "eyebrow": z.string(),
        "title": z.string(),
        "subtitle": z.string()
      }),
      "overview": z.object({
        "eyebrow": z.string(),
        "title": z.string(),
        "subtitle": z.string(),
        "layers": z.array(z.object({
          "id": z.string(),
          "number": z.string(),
          "name": z.string(),
          "desc": z.string(),
          "color": z.string()
        }))
      }),
      "hardware": z.object({
        "eyebrow": z.string(),
        "title": z.string(),
        "intro": z.string(),
        "esp32": z.object({
          "title": z.string(),
          "specs": z.array(z.object({
            "id": z.string(),
            "label": z.string(),
            "value": z.string()
          }))
        }),
        "sensors": z.array(z.object({
          "id": z.string(),
          "name": z.string(),
          "model": z.string(),
          "icon": z.string(),
          "range": z.string(),
          "accuracy": z.string(),
          "interface": z.string(),
          "depth": z.string(),
          "desc": z.string()
        }))
      }),
      "firmware": z.object({
        "eyebrow": z.string(),
        "title": z.string(),
        "intro": z.string(),
        "tasks": z.array(z.object({
          "id": z.string(),
          "name": z.string(),
          "interval": z.string(),
          "desc": z.string()
        })),
        "payload": z.string()
      }),
      "pipeline": z.object({
        "eyebrow": z.string(),
        "title": z.string(),
        "intro": z.string(),
        "stages": z.array(z.object({
          "id": z.string(),
          "step": z.string(),
          "name": z.string(),
          "tech": z.string(),
          "desc": z.string()
        }))
      }),
      "ai": z.object({
        "eyebrow": z.string(),
        "title": z.string(),
        "intro": z.string(),
        "inputs": z.array(z.object({
          "id": z.string(),
          "label": z.string(),
          "source": z.string()
        })),
        "models": z.array(z.object({
          "id": z.string(),
          "name": z.string(),
          "type": z.string(),
          "desc": z.string(),
          "accuracy": z.string()
        })),
        "crops": z.array(z.string())
      }),
      "weather": z.object({
        "eyebrow": z.string(),
        "title": z.string(),
        "intro": z.string(),
        "endpoints": z.array(z.object({
          "id": z.string(),
          "name": z.string(),
          "endpoint": z.string(),
          "use": z.string()
        })),
        "logic": z.array(z.object({
          "id": z.string(),
          "condition": z.string(),
          "action": z.string()
        }))
      }),
      "actuation": z.object({
        "eyebrow": z.string(),
        "title": z.string(),
        "intro": z.string(),
        "features": z.array(z.object({
          "id": z.string(),
          "icon": z.string(),
          "title": z.string(),
          "desc": z.string()
        }))
      }),
      "roadmapTech": z.object({
        "eyebrow": z.string(),
        "title": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "phase": z.string(),
          "title": z.string(),
          "desc": z.string()
        }))
      })
    })
  }
};
export type Schemas = typeof schemas;