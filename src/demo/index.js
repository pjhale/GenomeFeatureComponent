import GenomeFeatureViewer from 'GenomeFeatureViewer';
// import {ApolloService} from "../services/ApolloService";
import {FakeDataService} from "./FakeDataService";
//DELETE?UNUSED? import { ApolloService } from '../../src/services/services';

// Global View Example
// let apolloService = new ApolloService();
let fakeDataService = new FakeDataService();

let configGlobal1 = {
    "locale": "global",
    "chromosome": 5,
    "start": 75574916,
    "end": 75656722,
    "tracks": [
        {
            id:2,
            "genome":"Mus musculus",
            "type": "variant-global",
        },
        {
            "id": 1,
            "genome":"Mus musculus",
            "type": "isoform",
            "url": [
                "https://agr-apollo.berkeleybop.io/apollo/track/",
                "/All%20Genes/",
                ".json"
            ]
        },
    ]
};

new GenomeFeatureViewer(configGlobal1, "#viewer1", 700, null);

let configGlobal2 = {
    "locale": "global",
    "chromosome": "2L",
    "start": 19400752,
    "end": 19426596,
    "transcriptTypes":  [
        'mRNA', 'ncRNA', 'piRNA'
        , 'lincRNA'
        , 'miRNA'
        , 'pre_miRNA'
        , 'snoRNA'
        , 'lnc_RNA'
        , 'tRNA'
        , 'snRNA'
        , 'rRNA'
        , 'ARS'
        , 'antisense_RNA'


        , 'C_gene_segment'
        , 'V_gene_segment'
        , 'pseudogene_attribute'
        ,'snoRNA_gene'
    ],
    "tracks": [
        {
            "id": 1,
            "genome":"Drosophila melanogaster",
            "type": "isoform",
            "url": [
                "https://agr-apollo.berkeleybop.io/apollo/track/",
                "/All%20Genes/",
                ".json?name=Pax"
            ]
        },
    ]
};

new GenomeFeatureViewer(configGlobal2, "#viewer2", 700, null);

// Local View Example
// Right now we enter in with a specific location, center it in the viewer.
// TODO: Enable a range and start the left most value on the viewer.
let configLocal3 = {
     "locale": "local",
     "chromosome": 5,
     "start": 48515461,
     "end": 48515461,
     "centerVariant": true,
     "tracks": [
         {
             "id": 1,
             "label": "Case Variants",
             "type": "variant",
             "chromosome": 5,
         },
         {
             "id": 2,
             "label": "ClinVar Cases",
             "type": "variant",
             "chromosome": 5,
         }
     ]
 };


new GenomeFeatureViewer(configLocal3, "#viewer3", 900, 400);


let configGlobal4 = {
  "locale": "global",
  "chromosome": 'V',
  "start": 20824,
  "end": 43697,
  "transcriptTypes":  [
    'mRNA', 'ncRNA', 'piRNA'
    , 'lincRNA'
    , 'miRNA'
    , 'pre_miRNA'
    , 'snoRNA'
    , 'lnc_RNA'
    , 'tRNA'
    , 'snRNA'
    , 'rRNA'
    , 'ARS'
    , 'antisense_RNA'


    , 'C_gene_segment'
    , 'V_gene_segment'
    , 'pseudogene_attribute'
    ,'snoRNA_gene'
  ],
  "variantTypes": ['point_mutation','MNV','Deletion','Insertion','Delins'],
  "tracks": [
    {
      "id": 12,
      "genome":"Mus musculus",
      "type": "isoform_variant",
      "isoformFunction": fakeDataService.GetFakeWormGeneDataEgl8(),
      "isoform_url": [
        "https://agr-apollo.berkeleybop.io/apollo/track/",
        "/All%20Genes/",
        ".json"
      ],
      "variantFunction": fakeDataService.GetFakeWormVariantDataEgl8(),
      "variant_url": [
        "https://agr-apollo.berkeleybop.io/apollo/vcf/",
        "/Phenotypic%20Variants/",
        ".json"
      ],

    },
  ]
};

new GenomeFeatureViewer(configGlobal4, "#viewer4", 900, 400);

let configGlobal5 = {
  "locale": "global",
  "chromosome": 'V',
  "start": 20824,
  "end": 43697,
  "tracks": [
    {
      "id": 12,
      "genome":"Mus musculus",
      "type": "isoform_variant",
      "isoformFunction": fakeDataService.GetFakeFishGeneDataLbx2(),
      "isoform_url": [
        "https://agr-apollo.berkeleybop.io/apollo/track/",
        "/All%20Genes/",
        ".json"
      ],
      "variantFunction": fakeDataService.GetFakeFishVariantDataLbx2(),
      "variant_url": [
        "https://agr-apollo.berkeleybop.io/apollo/vcf/",
        "/Phenotypic%20Variants/",
        ".json"
      ],

    },
  ]
};

new GenomeFeatureViewer(configGlobal5, "#viewer5", 900, 500);

let configGlobal6 = {
  "locale": "global",
  "chromosome": 'V',
  "start": 20824,
  "end": 43697,
  "tracks": [
    {
      "id": 12,
      "genome":"Mus musculus",
      "type": "isoform_variant",
      "isoformFunction": fakeDataService.GetFakeFishGeneDataMyl7(),
      "isoform_url": [
        "https://agr-apollo.berkeleybop.io/apollo/track/",
        "/All%20Genes/",
        ".json"
      ],
      "variantFunction": fakeDataService.GetFakeFishVariantDataMyl7(),
      "variant_url": [
        "https://agr-apollo.berkeleybop.io/apollo/vcf/",
        "/Phenotypic%20Variants/",
        ".json"
      ],

    },
  ]
};

new GenomeFeatureViewer(configGlobal6, "#viewer6", 900, 500);
