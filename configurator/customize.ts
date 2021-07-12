import * as k8s from "@kubernetes/client-node";
import { Transform, nodePort, setResources, Cluster, storageClass, ingressNginx, serviceNginx } from './common'

export const transformations: Transform[] = [    
    // transformDeployments(d => d.metadata?.name === 'sourcegraph-frontend', d => {
    //     d.metadata!.name += '-foobar2'
    // })

    setResources(['zoekt-webserver'], { limits: { cpu: '1' }}),

    storageClass('gcp', (sc: k8s.V1StorageClass) => {
        // possible customizations here
    }),

    ingressNginx(),
    // serviceNginx('path/to/certificate.crt', 'path/to/private/key.key'),
    // nodePort(),

    // TODO
    // - TLS
    // - Customize site configuration
    // - Repository cloning
    // - Replica count
    // - Storage class (GCP, AWS, Azure, other)
    // - NodeSelector (resource-hungry pods to larger nodes)
    // - Aux directory to add other k8s objects to manifest
    // - Custom Redis
    // - Custom Postgres
    // - Install cluster-wide, without RBAC
    // - Add license key
    // - Overlays
    //   - Minikube
    //   - Non-privileged
    //   - Namespaced
    //   - Non-root


]
