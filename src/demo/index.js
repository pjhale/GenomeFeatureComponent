import GenomeFeatureViewer from 'GenomeFeatureViewer';
import {FakeAgrDataService} from "./FakeAgrDataService";

// import {ApolloService} from "../services/ApolloService";
// let apolloService = new ApolloService();

// Global View Example
let fakeAgrDataService = new FakeAgrDataService();

// oldExamples();
wormExamples();
fishExamples();
ratExamples();
mouseExamples();
flyExamples();

function flyExamples(){
  // 2L:132412..230018
// http://localhost:8080/apollo/vcf/remotefly/Phenotypic%20Variants/2L:132412..230018.json?includeGenotypes=false&ignoreCache=true
// http://localhost:8080/apollo/track/remotefly/All%20Genes/2L:132412..230018.json?includeGenotypes=false&ignoreCache=true
  let configGlobal1 = {
    "locale": "global",
    "chromosome": '2L',
    "start": 132412,
    "end": 230018,
    "showVariantLabel":true ,
    "tracks": [
      {
        "id": 12,
        "genome":"Fly",
        "type": "isoform_variant",
        "isoformFunction": fakeAgrDataService.GetFakeFlyGeneExample1(),
        "isoform_url": [
          "https://agr-apollo.berkeleybop.io/apollo/track/",
          "/All%20Genes/",
          ".json"
        ],
        "variantFunction": fakeAgrDataService.GetFakeFlyVariantExample1(),
        "variant_url": [
          "https://agr-apollo.berkeleybop.io/apollo/vcf/",
          "/Phenotypic%20Variants/",
          ".json"
        ],

      },
    ]
  };

  new GenomeFeatureViewer(configGlobal1, "#viewerFlyExample1", 900, 500);
}

function ratExamples(){
  // http://localhost:8080/apollo/vcf/remotemouse/Phenotypic%20Variants/6:113619452..113636198.json?includeGenotypes=false&ignoreCache=true
  // http://localhost:8080/apollo/track/remotemouse/All%20Genes/6:113619452..113636198.json?includeGenotypes=false&ignoreCache=true  let configGlobal1 = {
  let configGlobal1 = {
    "locale": "global",
    "chromosome": '2L',
    "start": 132412,
    "end": 230018,
    "showVariantLabel":true ,
    "tracks": [
      {
        "id": 12,
        "genome":"Fly",
        "type": "isoform_variant",
        "isoformFunction": fakeAgrDataService.GetFakeRatGeneExample1(),
        "isoform_url": [
          "https://agr-apollo.berkeleybop.io/apollo/track/",
          "/All%20Genes/",
          ".json"
        ],
        "variantFunction": fakeAgrDataService.GetFakeRatVariantExample1(),
        "variant_url": [
          "https://agr-apollo.berkeleybop.io/apollo/vcf/",
          "/Phenotypic%20Variants/",
          ".json"
        ],

      },
    ]
  };

  new GenomeFeatureViewer(configGlobal1, "#viewerRatExample1", 900, 500);
}
function mouseExamples(){
  // http://localhost:8080/apollo/vcf/remotemouse/Phenotypic%20Variants/6:113619452..113636198.json?includeGenotypes=false&ignoreCache=true
  // http://localhost:8080/apollo/track/remotemouse/All%20Genes/6:113619452..113636198.json?includeGenotypes=false&ignoreCache=true  let configGlobal1 = {
  let configGlobal1 = {
    "locale": "global",
    "chromosome": '2L',
    "start": 132412,
    "end": 230018,
    "showVariantLabel":true ,
    "tracks": [
      {
        "id": 12,
        "genome":"Fly",
        "type": "isoform_variant",
        "isoformFunction": fakeAgrDataService.GetFakeMouseGeneExample1(),
        "isoform_url": [
          "https://agr-apollo.berkeleybop.io/apollo/track/",
          "/All%20Genes/",
          ".json"
        ],
        "variantFunction": fakeAgrDataService.GetFakeMouseVariantExample1(),
        "variant_url": [
          "https://agr-apollo.berkeleybop.io/apollo/vcf/",
          "/Phenotypic%20Variants/",
          ".json"
        ],

      },
    ]
  };

  new GenomeFeatureViewer(configGlobal1, "#viewerMouseExample1", 900, 500);


}

function fishExamples(){
  let configGlobal5 = {
    "locale": "global",
    "chromosome": 'V',
    "start": 20824,
    "end": 43697,
    "showVariantLabel":true ,
    "tracks": [
      {
        "id": 12,
        "genome":"Mus musculus",
        "type": "isoform_variant",
        "isoformFunction": fakeAgrDataService.GetFakeFishGeneDataLbx2(),
        "isoform_url": [
          "https://agr-apollo.berkeleybop.io/apollo/track/",
          "/All%20Genes/",
          ".json"
        ],
        "variantFunction": fakeAgrDataService.GetFakeFishVariantDataLbx2(),
        "variant_url": [
          "https://agr-apollo.berkeleybop.io/apollo/vcf/",
          "/Phenotypic%20Variants/",
          ".json"
        ],

      },
    ]
  };

  new GenomeFeatureViewer(configGlobal5, "#viewerFishLbx2", 900, 500);

  let configGlobal6 = {
    "locale": "global",
    "chromosome": 'V',
    "start": 20824,
    "end": 43697,
    "showVariantLabel":false,
    "tracks": [
      {
        "id": 12,
        "genome":"Mus musculus",
        "type": "isoform_variant",
        "isoformFunction": fakeAgrDataService.GetFakeFishGeneDataMyl7(),
        "isoform_url": [
          "https://agr-apollo.berkeleybop.io/apollo/track/",
          "/All%20Genes/",
          ".json"
        ],
        "variantFunction": fakeAgrDataService.GetFakeFishVariantDataMyl7(),
        "variant_url": [
          "https://agr-apollo.berkeleybop.io/apollo/vcf/",
          "/Phenotypic%20Variants/",
          ".json"
        ],

      },
    ]
  };

  new GenomeFeatureViewer(configGlobal6, "#viewerFishMyl7", 900, 500);
}


function wormExamples(){
  let configGlobal4 = {
    "locale": "global",
    "chromosome": 'V',
    "start": 20824,
    "end": 43697,
    "showVariantLabel":false,
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
        "isoformFunction": fakeAgrDataService.GetFakeWormGeneDataEgl8(),
        "isoform_url": [
          "https://agr-apollo.berkeleybop.io/apollo/track/",
          "/All%20Genes/",
          ".json"
        ],
        "variantFunction": fakeAgrDataService.GetFakeWormVariantDataEgl8(),
        "variant_url": [
          "https://agr-apollo.berkeleybop.io/apollo/vcf/",
          "/Phenotypic%20Variants/",
          ".json"
        ],

      },
    ]
  };

  new GenomeFeatureViewer(configGlobal4, "#viewerWormEgl8", 900, 400);

}




function oldExamples(){

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

}
